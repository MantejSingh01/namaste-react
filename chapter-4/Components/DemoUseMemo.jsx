import { useMemo, useState } from "react";

//  const DemoUseMemo = ()=>{
//    const [value, setValue] = useState(0);
//    const [isOn, setIsOn] = useState(false);

//    let prime = useMemo(() => {
//      findNthPrime(value);
//    }, [value]);
//    // let prime = findNthPrime(value);
//    console.log("rendering.........");

//    return (
//      <div className="mainDemo">
//        <input onChange={(e) => setValue(e.target.value)}></input>
//        <span className={`demo ${isOn ? "on" : ""}`}>{prime}</span>
//        <button onClick={() => setIsOn(!isOn)}>Button</button>
//      </div>
//    );
//  }


// function isPrime(num) {
//     if (num <= 1) {
//       return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//        return false;
//       }
//     }
//     return true;
//    }
  
//    //Function to find the nth prime number
//    function findNthPrime(n) {
//     let count = 0;
//     let num = 2;
//     while (count < n) {
//       if (isPrime(num)) {
//        count++;
//       }
//       num++;
//     }
//     return num - 1;
//    }
  
  
  
  
//   export default DemoUseMemo;



function DemoUseMemo() {
    const [isOn, setIsOn] = useState(false);
    console.log("nbskdckjsnlk")
  return (
    <div>
      <h1>Parent Component</h1>
      <Child  isOn={isOn} />
      <Child  isOn={isOn} />

      <button className={`demo ${isOn ? "on" : ""}`} onClick={() => setIsOn(!isOn)}>Button</button>
    </div>
  );
}

function Child({isOn}) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
    <p>Count: {count}</p>
    <p>isOn: {isOn ? "On" : "Off"}</p>
    <button onClick={increment}>Increment</button>
  </div>
  );
}

export default DemoUseMemo;
