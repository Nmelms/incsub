import React from "react";

export default function RadioItem({ id, value, text }) {
  return (
    <label className="radioLabel" htmlFor={id}>
      <input type="radio" name="cancel_membership" id={id} value={value} />
      {text}
    </label>
  );
}
