import React, { useRef, useEffect, useState } from "react";

export default function RadioItem({ id, value, text, btnRef, setConditional }) {
  const inputRef = useRef();
  const labelRef = useRef();
  const divRef = useRef();
  const [itemChecked, setItemChecked] = useState("white");

  const handleClick = (e) => {
    btnRef.current.disabled = false;
  };

  const handleChange = (e) => {
    if (inputRef.current.checked) {
      labelRef.current.style.background = "lightblue";
    }
  };

  useEffect(() => {
    labelRef.current.style.background = "white";
  });

  return (
    <label
      ref={labelRef}
      onClick={() => setConditional(value)}
      className="radioLabel"
      htmlFor={id}
    >
      <input
        ref={inputRef}
        className="radioBtn"
        onChange={(e) => handleChange(e)}
        onClick={(e) => handleClick(e)}
        type="radio"
        name="cancel_membership"
        id={id}
        value={value}
      />
      <p style={{ fontWeight: "bold", margin: 0 }}>{text}</p>
    </label>
  );
}
