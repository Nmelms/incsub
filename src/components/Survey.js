import React, { useRef, useState } from "react";
import {
  faSquareCaretLeft,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Alert from "./Alert.js";
import RadioItem from "./RadioItem";
import Bugs from "./Bugs";

export default function Survey({ setShowSurvey, showSurvey }) {
  const [response, setResponse] = useState();
  const [conditional, setConditional] = useState();
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
          <h2>We're sad to see you go...</h2>
          <p>Can you tell us why you want to cancel your membership?</p>
        </header>
        <div className="surveyBody">
          <form className="surveyForm">
            <RadioItem
              setConditional={setConditional}
              btnRef={btnRef}
              id={"membership"}
              value={"membership"}
              text={"I didn't realize it was a reoccuring membership"}
            />
            <RadioItem
              setConditional={setConditional}
              btnRef={btnRef}
              id={"solution"}
              value={"solution"}
              text={"Found a better solution"}
            />
            {conditional === "solution" && (
              <textarea
                name={"cancel_membership"}
                onChange={(e) => {}}
                className="solutionTextArea"
                defaultValue="What is the better solution? If you don't mind sharing. Your
                feedback is much appreciated!"
              ></textarea>
            )}
            <RadioItem
              setConditional={setConditional}
              btnRef={btnRef}
              id={"price"}
              value={"price"}
              text={"It's too expensive"}
            />
            <RadioItem
              setConditional={setConditional}
              btnRef={btnRef}
              id={"bugs"}
              value={"bugs"}
              text={"Bugs, things not working properly"}
            />
            {conditional === "bugs" && <Bugs />}
            <RadioItem
              setConditional={setConditional}
              btnRef={btnRef}
              id={"pugin"}
              value={"plugin"}
              text={"I just want to pay for a single plugin"}
            />
            <RadioItem
              setConditional={setConditional}
              btnRef={btnRef}
              id={"wordpress"}
              value={"wordpress"}
              text={"Not using WordPress anymore"}
            />
            <RadioItem
              setConditional={setConditional}
              btnRef={btnRef}
              id={"other"}
              value={"other"}
              text={"Other"}
            />
            <Alert />
            <div className=" surveyBtns">
              <button
                onClick={() => setShowSurvey(false)}
                className="btn backBtn"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
                Back
              </button>
              <button
                type="submit"
                className="btn confirmBtn"
                ref={btnRef}
                disabled={true}
              >
                Cancel Membership
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
