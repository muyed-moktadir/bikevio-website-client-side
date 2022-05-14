import { useEffect, useState } from "react";

const useBikevioItems = () => {
  const [bikes, setBikes] = useState([]);
  console.dir(bikes);

  useEffect(() => {
    fetch("https://rocky-coast-85375.herokuapp.com/inventory/")
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);
  return[bikes,setBikes];
};

export default useBikevioItems;
