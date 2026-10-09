import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './runtime.jsx';
export default function html() { return renderToString(<App />); }
