import React from "react";
import PropTypes from "prop-types";

// this contains the questions
let questions = [];
fetch("https://opentdb.com/api.php?amount=10&category=20")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data.results);
    questions.push(data.results);
    console.log(questions[0][0].question);
  });

const Main = () => (
  <div>
    Main Component
    <p>{questions[0][0].question}</p>
  </div>
);

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
