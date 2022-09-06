import React from "react";

export default function RadioItem({ id, value, text, btnRef }) {
  return (
    <label className="radioLabel" htmlFor={id}>
      <input
        onClick={() => (btnRef.current.disabled = false)}
        type="radio"
        name="cancel_membership"
        id={id}
        value={value}
      />
      {text}
    </label>
  );
}
