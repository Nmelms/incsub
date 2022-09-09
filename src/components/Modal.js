import React from "react";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Modal({ setShowSurvey }) {
  return (
    <div className="modal">
      <div className="closeBtn">X</div>
      <div className="all">
        <FontAwesomeIcon className="tagIcon" size="4x" icon={faTags} />
        <div className="modalTitle">
          <div className="titleText">
            <h2>Before You Go....</h2>
            <h2>Would 50% off 6months Help?</h2>
          </div>
          <body className="modalBody">
            <p>
              We know things REALLY suck in the world right now - and many
              business and freelancers are struggling to stay afloat during the
              COVID-19 crisis.
            </p>
            <p className="modalBoldText">
              So if you could use some extra cushion, grab 50% off for 6 months.
            </p>
            <p>We hope youre staying safe and Healthy</p>
          </body>
          <div className="modalButtons">
            <button className="primaryBtn btn">50% off for 6 months</button>
            <button
              onClick={() => setShowSurvey(true)}
              className="cancelBtn btn"
            >
              No thanks, ill cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
