import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useNewBikevioItems from "../../../newCollectionHook/newCollectionHook";
import Loading from "../../Shared/Loading/Loading";
import MyItem from "../MyItem/MyItem";

const Myitems = () => {
  const [user] = useAuthState(auth);
  const [newBikes, setNewBikes] = useState([]);

  //   console.log(user);
  //   if (!user) {
  //     return <Loading></Loading>;
  //   }

  useEffect(() => {
    const getMyItems = async () => {
      const email = user?.email;
      if (email) {
        console.log(email);
        const url = `http://localhost:5000/newItem?email=${email}`;
        console.log(url);
        fetch(url)
          .then((res) => res.json())
          .then((data) => setNewBikes(data));
      }
    };
    getMyItems();
  }, [user]);
  //   if (!user) {
  //     return <Loading></Loading>;
  //   }

  //   function getMyItems(email) {
  //     // const email = u;

  //     useEffect(() => {
  //       fetch(`http://localhost:5000/newItem?email=${email}`)
  //         .then((res) => res.json())
  //         .then((data) => setNewBikes(data));
  //     }, []);
  //   }
  //   getMyItems(user.email);

  //   if (!user) {
  //     return <Loading></Loading>;
  //   }

  //   console.log(user.email);
  //   console.log(newBikes);
  return (
    <div>
      <h1>My bike collection</h1>

      <div className="services-container">
        {newBikes.map((newBike) => (
          <MyItem key={newBike._id} newBike={newBike}></MyItem>
        ))}
      </div>
    </div>
  );
};

export default Myitems;
