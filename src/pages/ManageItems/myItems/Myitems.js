import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import MyItem from "../MyItem/MyItem";

const Myitems = () => {
  const [user] = useAuthState(auth);
  const [newBikes, setNewBikes] = useState([]);


  // TODO:
  useEffect(() => {
    const getMyItems = async () => {
      const email = user.email;

      if (email) {
        const url = `https://rocky-coast-85375.herokuapp.com/inventory?email=${email}`;
        // console.dir(url);
          fetch(url, {
            headers: {
              authorization:`Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
            .then((res) => res.json())
            .then((data) => setNewBikes(data));   
      }

    };
    getMyItems();
  }, [user]);
  if (newBikes.length < 1) {
    return <Loading></Loading>;
  }


  return (
    <div>
      <h1>My bike collection</h1>

      <div className="bikes-container">
        {newBikes
          .filter((newBike) => {
            if (newBike.email === user.email) {
              return newBike;
            }
          })
          .map((newBike) => (
            <MyItem key={newBike._id} newBike={newBike} user={user}></MyItem>
          ))}
      </div>
    </div>
  );
};

export default Myitems;
