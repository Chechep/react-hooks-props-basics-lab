import React from "react";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio &&<p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <h2>Links</h2>
        <a href={props.github}>{props.github}</a>
        <br />
        <a href={props.linkedin}>{props.linkedin}</a>
        <br />
      {/* add your <Links /> component here */}
    </div>
  );
}

export default About;
