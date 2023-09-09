const Parent = React.createElement(
    'h1', 
{ id: "parent" }, 
React.createElement(
    'div', 
{ className: 'child' }, 
React.createElement(
    'h1', 
    { className: "heading"}, "hello react")));
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(Parent);