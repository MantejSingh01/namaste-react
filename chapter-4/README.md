# namaste-react
# Pracel ---- Read documentation
- Dev-build
- Local Server
- Refresinh our page -HMR-> hot module replacement
- File watching algo - written in C++
- Also caching for faster results
- Image optimization
- minification of files
- buldling the files
- compress the files
- Consisting hashing.
- code splitting
- defferential bundling - support older browsers
- host app on https
- Tree Shaking algo - will remove unused code 
- create different build for dev and prod
# Package.js vs Pakage.lock.json
- PJ will contain the version which will upgrade if it includs ^ (we can remove it to maintain the same version)
- PLJ contain the actual version of dependency and all the other dependencies that package is depended on.


# Node_modules
- Contains the real data of the dependency
- Along with dependency package.json inside


# extra to note down 
- remove main config from package.json
- jsx is defferent than react Both are very different.
- jsx is convention where we merge the js with html.
- jsx is not html in js
- jsx is HTML like syntex. or XML like.
- What is react fucntional component ? ==>> It is simple JS function === always starts with capital
- fun() return reactElement is a functional component




# controlled and uncontrolled component

- if a component's state is controlled by parent then it is controlled component
- if it controlling itself then it is a uncontrolled component. 


# Context API

- to create a context we use createContext 

# Redux toolkit
- install RTK library, react-reduc
- Build our store
- connect our store to app
- will create cart slice
- dispatch() an action 
- Read the data using selectot


# usereducer Hook
- also a hook which takes a reducer fuction (which further can contain switch cases) and initial state.
- eg 
- const initialState = 0; // Initial state
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};
const [state, dispatch] = useReducer(reducer, initialState);
return (
  <!-- <div>
    <p>Count: {state}</p>
    <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
    <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
  </div>
); -->

# nanoid provided by RTK
- prepare