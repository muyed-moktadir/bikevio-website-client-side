import { useEffect, useState } from "react";

const useNewBikevioItems = () => {
  const [newBikes, setNewBikes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/newItem")
      .then((res) => res.json())
      .then((data) => setNewBikes(data));
  }, []);
  return[newBikes];
};

export default useNewBikevioItems;