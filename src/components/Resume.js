import React from "react";
import data from "../data.json";
import logo from "../logo.svg";
import logo1 from "../img.jpg";
function Resume(props) {
  let profile = data.details[props.location.personcard.id];

  let image=[logo, logo1]
  return (
    <div className="row text-left" >
      {/* cards data */}
      <div className="col-sm-10 col-md-2 mr-1">
        <div className="card">
        <img src= {image[props.location.personcard.id] }/>
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

        <div>
          <h2> Educational Details:</h2>
          <hr/>
                  <table  border="1px" >
                  <thead>
        <tr>
          <th>Education</th>
          <th>Name Of The Institution</th>
          <th>Board</th>
          <th>Academic year</th>
          <th>Percentage</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>B.Tech</td>
          <td>Brindavan Institute Of Technology And Science, Kurnool</td>
          <td>JNTU Ananthapur</td>
          <td>2016</td>
          <td>62</td>
        </tr>
        <tr>
          <td>Higher Education</td>
          <td>Naryana Junior College, Kurnool</td>
          <td>Board Of Intermediate</td>
          <td>2012</td>
          <td>89</td>
        </tr>
        <tr>
          <td>Secondary Education</td>
          <td>Bhashyam Public School, Kurnool</td>
          <td>Board Of SSC</td>
          <td>2010</td>
          <td>87</td>
        </tr>
        </tbody>
      </table>
        </div>

      <h2>Personal Skills:</h2>
      <ul type="square">
        <li>Good Communication skills</li>
        <li>Willing to learn new things</li>
        <li>Dedication towards work</li>
        <li>adaptable to new enivronment</li>
        <li>Have a good quality being positive</li>
      </ul>
      <dl>
        <dt><b>Leadership Qualities</b>:</dt>
        <dd>Elected as a Class Representative in Bridavan Institute Of Technology and Science</dd>
      </dl>
      </div>
    </div>
  );
}

export default Resume;
