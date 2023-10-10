import React, { useState, useEffect } from "react";

function useRestoData() {

  const [data, setData] = useState([]);

  useEffect(() => {
    getRestoData();
  }, []);

  const getRestoData = async () => {
    const data = await fetch("http://localhost:3000/zomato");
    const res = await data.json();

    setData(res);
  };
  return [data, setData];
}

export default useRestoData;
