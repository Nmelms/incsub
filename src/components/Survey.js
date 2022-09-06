import React from "react";
import { faSquareCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Alert from "./Alert.js";
import RadioItem from "./RadioItem";

export default function Survey({ setShowSurvey, showSurvey }) {
  return (
    <div className="survey">
      <nav className="surveyNav">
        <FontAwesomeIcon
          className="backIcon"
          size="2x"
          icon={faSquareCaretLeft}
          onClick={() => setShowSurvey(false)}
        />
        <h3>Cancellation Survey</h3>
      </nav>
      <div className="form">
        <header className="surveyHeader">
          <h2>Were Sad to see you go...</h2>
          <p>Can you tell us why you want to cancel your membership?</p>
        </header>
        <body className="surveyBody">
          <form className="surveyForm">
            <RadioItem
              id={"membership"}
              value={"membership"}
              text={"I didnt realize it was a reoccuring membership"}
            />
            <RadioItem
              id={"solution"}
              value={"solution"}
              text={"Found a better solution"}
            />
            <RadioItem
              id={"price"}
              value={"price"}
              text={"its too expensive"}
            />
            <RadioItem
              id={"bugs"}
              value={"bugs"}
              text={"bugs, things not working properly"}
            />
            <RadioItem
              id={"pugin"}
              value={"plugin"}
              text={"I just want to pay for a single plugin"}
            />
            <RadioItem
              id={"wordpress"}
              value={"wordpress"}
              text={"Not using WordPress anymore"}
            />
            <RadioItem id={"other"} value={"other"} text={"other"} />
          </form>
          <Alert />
        </body>
      </div>
    </div>
  );
}
