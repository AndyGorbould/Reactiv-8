import React from "react";
import PropTypes from "prop-types";

// this contains the data in an array, note the [0][0].question to access the correct part
let questions = [];
let allAnswers = [];

async function grabQuestions() {
  fetch("https://opentdb.com/api.php?amount=10&category=20")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      // console.log(data.results);
      console.log(data.results[0].correct_answer);
      questions.push(data.results);
      allAnswers.push(data.results[0][0].incorrect_answers);
      allAnswers.push(data.results[0][0].correct_answer);
      // console.log(questions[0][0].question);
    })
    .catch(handleError);
}
grabQuestions();

// catch the errors
function handleError(err) {
  console.log("Oh noooo!");
  console.log(err);
}

const Main = () => (
  <div>
    Main Component
    <h1>Question:</h1>
    <h2>{questions[0][0].question}</h2>
    {/* spacer */}
    <table>
      <tbody>
        {/* this will need to be the foreach incorrect_answers + correct_answer loop to generate the required amount of possible answers */}
        <tr>
          <button>{questions[0][0].correct_answer}</button>
        </tr>
        <tr>
          <button>{questions[0][0].incorrect_answers[0]}</button>
        </tr>
        <tr>
          <button>{questions[0][0].incorrect_answers[1]}</button>
        </tr>
        <tr>
          <button>{questions[0][0].incorrect_answers[2]}</button>
        </tr>
      </tbody>
    </table>
  </div>
);

// these are the default properties this component (pre-baked from CLI) - leave them here for now but they're only necessary for TypeScript
Main.propTypes = {};

Main.defaultProps = {};

export default Main;
