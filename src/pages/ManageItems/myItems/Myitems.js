import React from "react";
import useNewBikevioItems from "../../../newCollectionHook/newCollectionHook";
import MyItem from "../MyItem/MyItem";

const Myitems = () => {
  const [newBikes] = useNewBikevioItems();
  console.log(newBikes);
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
