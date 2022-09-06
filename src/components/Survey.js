import React, { useRef } from "react";
import {
  faSquareCaretLeft,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Alert from "./Alert.js";
import RadioItem from "./RadioItem";

export default function Survey({ setShowSurvey, showSurvey }) {
  const btnRef = useRef();
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
              btnRef={btnRef}
              id={"membership"}
              value={"membership"}
              text={"I didnt realize it was a reoccuring membership"}
            />
            <RadioItem
              btnRef={btnRef}
              id={"solution"}
              value={"solution"}
              text={"Found a better solution"}
            />
            <RadioItem
              btnRef={btnRef}
              id={"price"}
              value={"price"}
              text={"its too expensive"}
            />
            <RadioItem
              btnRef={btnRef}
              id={"bugs"}
              value={"bugs"}
              text={"bugs, things not working properly"}
            />
            <RadioItem
              btnRef={btnRef}
              id={"pugin"}
              value={"plugin"}
              text={"I just want to pay for a single plugin"}
            />
            <RadioItem
              btnRef={btnRef}
              id={"wordpress"}
              value={"wordpress"}
              text={"Not using WordPress anymore"}
            />
            <RadioItem
              btnRef={btnRef}
              id={"other"}
              value={"other"}
              text={"other"}
            />
          </form>
          <Alert />
          <div className="surveyBtns">
            <button onClick={() => setShowSurvey(false)} className="backBtn">
              <FontAwesomeIcon icon={faArrowLeft} />
              Back
            </button>
            <button ref={btnRef} disabled={true}>
              cancel membership
            </button>
          </div>
        </body>
      </div>
    </div>
  );
}
