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

# React Hooks
- can we do default and named exports in the same component.
- they normal JS func written by FB developer.
- written in the react.
- useState() => superpowerfull react variable.
- useEffect() => 


- when ever a state varibale changes then react re-render the components
# React 16 (React Fiber) 2016 
- React is the super power for DOM manipulation
- Reconcilation ALgo (React fiber)
- virtual dom is representation of actual DOM 
- it the react object which react return and then it is destructured . React create the object (React virtual DOM)
- it is nothing but normal javascript object
- Actual dom contains div or tag structire.
- DIFF Algo
- it finds out the difference btw updated virtual DOM and Previois virtual DOM.(the virtual old dom object and virtual new dom object )

