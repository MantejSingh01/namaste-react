import React from 'react';
import ReactDOM from 'react-dom/client';

const Parent = React.createElement(
    'h1', 
{ id: "parent" }, 
React.createElement(
    'div', 
{ className: 'child' }, 
React.createElement(
    'h1', 
    { className: "heading"}, "hello react  hi")));
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(Parent);