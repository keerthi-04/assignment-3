import React from "react";
import data from "../data.json";
function Resume(props) {
  let profile = data.details[props.location.personcard.id];
  console.log(profile);
  return (
    <div className="row">
      {/* cards data */}
      <div className="col-sm-10 col-md-2 mr-1">
        <div className="card">
          <h1>{profile.Card.name}</h1>
          <h2 className="text-secondary"> {profile.Card.des} </h2>
          <a href={"mailto:" + profile.Card.email}>
            <h4>{profile.Card.email}</h4>
          </a>
        </div>
      </div>
      {/* get the remaining resume data */}
      <div className=" card col-sm-10 col-md-9">
        <h2> Carrer Object:</h2>
        <hr />
        <p>{profile.career}</p>
      </div>
    </div>
  );
}

export default Resume;
