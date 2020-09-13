import React from "react";
import data from "../data.json";
import logo from "../logo.svg";
import logo1 from "../angular.png";
import { Link } from "react-router-dom";

let Cards = () => {
  let cardsData = data.details;
  console.log(cardsData);
  let images = [logo, logo1];
  return (
    <div>
      <h1 className="text-primary">Cards</h1>
      <div className="row">
        {cardsData.map((values, index) => (
          <div className="col-sm-10 col-md-4 m-1" key={index}>
            <div className="card">
              <img src={images[index]} />
              <h1>{values.Card.name}</h1>
              <h2 className="text-secondary"> {values.Card.des} </h2>
              <a href={"mailto:" + values.Card.email}>
                <h4>{values.Card.email}</h4>
              </a>
              <Link
                to={{
                  pathname: "/resume",
                  personcard: { id: index },
                }}
                className="btn btn-primary"
              >
                click Me..!
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
