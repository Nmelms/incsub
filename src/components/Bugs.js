import React, { useDebugValue, useEffect, useState, useRef } from "react";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Bugs() {
  const [showDropDown, setShowDropDown] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const inputRef = useRef();

  const handleClick = () => {
    setShowDropDown(!showDropDown);
  };

  useEffect(() => {
    if (showDropDown || checkedItems.length > 0) {
      inputRef.current.classList.add("active");
    } else {
      inputRef.current.classList.remove("active");
    }
  }, [checkedItems, showDropDown]);

  //removed checked item from count when it is deselected
  const handleCheck = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckedItems([...checkedItems, value]);
    } else {
      const filtered = checkedItems.filter((product) => product !== value);
      setCheckedItems(filtered);
    }
  };

  return (
    <>
      <div className="bugs">
        <p style={{ fontWeight: "bold" }}>
          What product(s) did you have an issue with?{" "}
          <FontAwesomeIcon
            style={{ color: "gray", paddingLeft: ".5rem" }}
            icon={faCircleExclamation}
          />
        </p>
        <div className="productDiv">
          <div
            ref={inputRef}
            onClick={() => handleClick()}
            className="dropDownInput"
          >
            <p>Select Product(s)</p>
            <div className="productNumber">
              {checkedItems.length === 1 &&
                `${checkedItems.length} product selected`}
              {checkedItems.length > 1 &&
                `${checkedItems.length} products selected`}
            </div>
          </div>
          {showDropDown && (
            <div className="dropDownContent">
              <label htmlFor="product1">
                <input
                  className="checkBox"
                  onChange={(e) => handleCheck(e)}
                  checked={checkedItems.includes("product1") ? true : false}
                  value="product1"
                  id="product1"
                  type="checkbox"
                />
                Product #1
              </label>
              <label htmlFor="product2">
                <input
                  className="checkBox"
                  onChange={(e) => handleCheck(e)}
                  checked={checkedItems.includes("product2") ? true : false}
                  value="product2"
                  id="product2"
                  type="checkbox"
                />
                Product #2
              </label>
              <label htmlFor="product3">
                <input
                  className="checkBox"
                  onChange={(e) => handleCheck(e)}
                  checked={checkedItems.includes("product3") ? true : false}
                  value="product3"
                  id="product3"
                  type="checkbox"
                />
                Product #3
              </label>
            </div>
          )}
        </div>

        <div className="toggle">
          <p style={{ fontWeight: "bold" }}>What was it?</p>
          <div className="problemBtns">
            <div>
              <label className="btnLabel" htmlFor="one">
                <input type="radio" id="one" name="problems" />
                <span style={{ fontWeight: "bold" }}>One Major Problem</span>
              </label>
            </div>
            <div>
              <label htmlFor="various">
                <input type="radio" id="various" name="problems" />
                <span style={{ fontWeight: "bold" }}>Various Problems</span>
              </label>
            </div>
          </div>
        </div>
        <div className="problemText">
          <p style={{ fontWeight: "bold" }}>
            What problem(s) did you encounter?{" "}
            <FontAwesomeIcon
              style={{ color: "gray", paddingLeft: ".5rem" }}
              icon={faCircleExclamation}
            />
          </p>
          <textarea></textarea>
        </div>
      </div>
    </>
  );
}
