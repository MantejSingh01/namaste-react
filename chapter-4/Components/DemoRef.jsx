import React, { useRef, useState } from "react";

function DemoRef(props) {
  const [isOn, setIsOn] = useState(false);

  const ref = useRef(0);
  let count = 0;
  console.log(count, "count increaseing", ref);

  return (
    <div>
      useRef example
      <button
        className={`demo ${isOn ? "on" : ""}`}
        onClick={() => setIsOn(!isOn)}
      >
        click to change value
      </button>
      <br />
      <button
        onClick={() => {
          count = count + 1;
          console.log(count);
          ref.current = count;
        }}
      >
        click to change value
      </button>
      <span>count:{count}</span>
      <br />
      <span>Ref.current:{ref.current}</span>
    </div>
  );
}

export default DemoRef;
