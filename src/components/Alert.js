import React from "react";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Alert() {
  return (
    <div className="alert">
      <FontAwesomeIcon
        style={{ color: "red" }}
        className="backIcon"
        icon={faCircleExclamation}
      />
      <p>
        Are you absolutely sure you want to cancel? If you do you'll lose access
        to so many cool things. And you'll lose the chance to stay on this plan
        at the same cost ongoing (regardless of future price increases).
      </p>
    </div>
  );
}
