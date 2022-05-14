import { useEffect, useState } from "react";
const useNewBikevioItems = (email) => {
  const [newBikes, setNewBikes] = useState([]);
  useEffect(() => {
    fetch(`https://rocky-coast-85375.herokuapp.com/newItem?email=${email}`,{
      headers:{
        authorization:`Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then((res) => res.json())
      .then((data) => setNewBikes(data));
  }, [email]);
  return[newBikes];
};

export default useNewBikevioItems;