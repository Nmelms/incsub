import React from "react";

export default function RadioItem({ id, value, text, btnRef, setConditional }) {
  return (
    <label
      onClick={() => setConditional(value)}
      className="radioLabel"
      htmlFor={id}
    >
      <div className="radioIcon">
        <input
          className="radioBtn"
          onClick={() => (btnRef.current.disabled = false)}
          type="radio"
          name="cancel_membership"
          id={id}
          value={value}
        />
      </div>

      {text}
    </label>
  );
}
