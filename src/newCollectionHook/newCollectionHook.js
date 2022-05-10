import { useEffect, useState } from "react";

const useNewBikevioItems = (email) => {
  const [newBikes, setNewBikes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/newItem?email=${email}`)
      .then((res) => res.json())
      .then((data) => setNewBikes(data));
  }, []);
  return[newBikes];
};

export default useNewBikevioItems;