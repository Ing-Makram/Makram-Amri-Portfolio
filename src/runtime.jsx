import React, { useEffect, useReducer, useRef, Fragment } from 'react';
import template from './template.json';
import Component from './logic.js';

const EVENTS = { onclick: 'onClick', onchange: 'onChange', onkeydown: 'onKeyDown', onmousemove: 'onMouseMove', onmouseleave: 'onMouseLeave' };
const RENAME = { class: 'className', for: 'htmlFor', tabindex: 'tabIndex', autocomplete: 'autoComplete', spellcheck: 'spellCheck', autofocus: 'autoFocus', maxlength: 'maxLength', readonly: 'readOnly' };
const BOOL = new Set(['disabled', 'hidden', 'checked', 'readOnly', 'autoFocus', 'required']);
const WHOLE = /^\{\{\s*([\w.]+)\s*\}\}$/;
const ANY = /\{\{\s*([\w.]+)\s*\}\}/g;

function look(path, scope) {
  let o = scope;
  for (const p of path.split('.')) { if (o == null) return undefined; o = o[p]; }
  return o;
}
function sub(str, scope) {
  if (str.indexOf('{{') < 0) return str;
  const m = WHOLE.exec(str);
  if (m) return look(m[1], scope);
  return str.replace(ANY, (_, p) => { const v = look(p, scope); return v == null || v === false ? '' : String(v); });
}
function styleObj(str) {
  const out = {}; let depth = 0, cur = '';
  const parts = [];
  for (const ch of str) {
    if (ch === '(') depth++; if (ch === ')') depth--;
    if (ch === ';' && depth === 0) { parts.push(cur); cur = ''; } else cur += ch;
  }
  parts.push(cur);
  for (const d of parts) {
    const i = d.indexOf(':'); if (i < 0) continue;
    const k = d.slice(0, i).trim(), v = d.slice(i + 1).trim(); if (!k) continue;
    if (k.startsWith('--')) out[k] = v;
    else out[k.replace(/^-ms-/, 'ms-').replace(/-([a-z])/g, (_, c) => c.toUpperCase()).replace(/^webkit/, 'Webkit')] = v;
  }
  return out;
}
function camel(k) { return k.replace(/-([a-z])/g, (_, c) => c.toUpperCase()); }

function build(node, scope, key, inSvg) {
  if (node.t === 'text') { const v = sub(node.v, scope); return v == null || v === false ? '' : String(v); }
  const tag = node.tag;
  const kids = node.kids || [];
  if (tag === 'sc-if') {
    const v = sub(node.attrs.value, scope);
    return v ? React.createElement(Fragment, { key }, kids.map((k, i) => build(k, scope, i, inSvg))) : null;
  }
  if (tag === 'sc-for') {
    const list = sub(node.attrs.list, scope) || [];
    const as = node.attrs.as;
    return React.createElement(Fragment, { key }, list.map((item, idx) => {
      const sc = Object.create(scope); sc[as] = item;
      return React.createElement(Fragment, { key: idx }, kids.map((k, i) => build(k, sc, i, inSvg)));
    }));
  }
  const svg = inSvg || tag === 'svg';
  const props = { key };
  for (const [name, raw] of Object.entries(node.attrs || {})) {
    let v = sub(raw, scope);
    if (EVENTS[name]) { if (typeof v === 'function') props[EVENTS[name]] = v; continue; }
    if (name === 'style') { props.style = typeof v === 'string' ? styleObj(v) : v; continue; }
    let k = RENAME[name] || name;
    if (svg && !/^(aria-|data-)/.test(k) && k.includes('-')) k = camel(k);
    if (BOOL.has(k)) { if (v === '' || v === true) v = true; else if (!v) continue; }
    if (v == null || v === false) continue;
    props[k] = v;
  }
  if (tag === 'input' && 'value' in props && !props.onChange) props.readOnly = true;
  const children = kids.map((k, i) => build(k, scope, i, svg));
  return React.createElement(tag, props, ...(children.length ? children : []));
}

export default function App() {
  const [, force] = useReducer((x) => x + 1, 0);
  const ref = useRef(null);
  if (!ref.current) { ref.current = new Component({}); }
  const inst = ref.current;
  inst._force = force;
  const vals = inst.renderVals();
  useEffect(() => {
    const cbs = inst._cbs.splice(0);
    cbs.forEach((f) => { try { f(); } catch (e) { console.error(e); } });
  });
  useEffect(() => { document.documentElement.lang = vals.langCode || 'en'; document.documentElement.dir = vals.dir || 'ltr'; }, [vals.langCode, vals.dir]);
  useEffect(() => () => inst.componentWillUnmount && inst.componentWillUnmount(), []);
  const scope = Object.create(vals);
  return React.createElement(Fragment, null, template.map((n, i) => build(n, scope, i, false)));
}
