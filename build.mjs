// Builds the static site into ./dist: bundles the React app, prerenders the first paint, copies assets.
import { build } from 'esbuild';
import { mkdirSync, cpSync, readFileSync, writeFileSync, rmSync, readdirSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist', { recursive: true });
cpSync('public', 'dist', { recursive: true });

const common = { bundle: true, jsx: 'automatic', loader: { '.json': 'json', '.js': 'jsx' }, logLevel: 'warning', define: { 'process.env.NODE_ENV': '"production"' } };
await build({ ...common, entryPoints: ['src/main.jsx'], outfile: 'dist/app.js', minify: true, format: 'iife', target: 'es2019' });
await build({ ...common, entryPoints: ['src/prerender.jsx'], outfile: '.prerender.cjs', platform: 'node', format: 'cjs' });
const { default: render } = (await import(pathToFileURL(resolve('.prerender.cjs')).href)).default ?? (await import(pathToFileURL(resolve('.prerender.cjs')).href));
const body = render();
rmSync('.prerender.cjs');

const fonts = readFileSync('src/fonts.txt', 'utf8').trim();
const host = process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? 'https://' + process.env.VERCEL_PROJECT_PRODUCTION_URL : '');
const og = host ? host + '/og.jpg' : '/og.jpg';
const title = 'Makram Amri | Software Engineering Student';
const desc = 'Software engineering student in Tunis. I build full-stack products with Django, React, TypeScript and AI. Chair of the IEEE RAS student chapter at SESAME, 3rd place at the ODC AI hackathon. Open to internships.';
const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc}">
<meta name="theme-color" content="#100F0E">
<meta property="og:type" content="website">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:image" content="${og}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${fonts}">
<link rel="stylesheet" href="/styles.css">
</head>
<body>
<div id="root">${body}</div>
<script src="/app.js" defer></script>
</body>
</html>
`;
writeFileSync('dist/index.html', html);
console.log('built dist/ (' + readdirSync('dist').length + ' files), html ' + html.length + ' bytes');
