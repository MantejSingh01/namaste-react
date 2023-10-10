import React, { useEffect, useState } from "react";

const Contact = (props) => {

  const [name, setName] = useState('');
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
   useEffect( () => {
    console.log("useEffect called!!");
     fetchGitData();
    console.log('called in useEffect')
  },[count,count2]);
  

  const fetchGitData= async ()=>{ 
    const res=  await fetch('https://api.github.com/users/MantejSingh01');
    const data = await res.json();
    setName(data.login);
    console.log("func called!!", name, data)
  }
  return (
    <div>
      {console.log("render called")}
      <div>Name: {name}</div>
      <div>{count}</div>
      <button onClick={()=>{setCount(count +1)}}>click</button>
    </div>
  )
};

export default Contact;
