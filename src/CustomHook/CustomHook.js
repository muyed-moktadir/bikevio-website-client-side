import { useEffect, useState } from "react";

const useBikevioItems = () => {
  const [bikes, setBikes] = useState([]);
  console.log(bikes)

  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);
  return[bikes,setBikes];
};

export default useBikevioItems;
