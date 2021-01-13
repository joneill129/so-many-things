import React from "react";
import { Link } from "react-router-dom";

const ThingsCard = (props) => {
  return (
    <>
      <h3>ThingsCard</h3>
      {props.things.map((thing) => {
        return (
          <div>
            <p>{thing.name}</p>
            <img src={thing.image} alt="" />
            <p>{thing.attributes.join(" , ")}</p>
          </div>
        );
      })}
      <Link
        to={{
          pathname: "/",
        }}
      >
        Back to all the Things
      </Link>
    </>
  );
};
export default ThingsCard;
