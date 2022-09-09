import React, { useDebugValue, useEffect, useState, useRef } from "react";

export default function Bugs() {
  const [showDropDown, setShowDropDown] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const inputRef = useRef();

  const handleClick = () => {
    console.log("click");
    setShowDropDown(!showDropDown);
  };
  useEffect(() => {
    if (showDropDown || checkedItems.length > 0) {
      inputRef.current.classList.add("active");
    } else {
      inputRef.current.classList.remove("active");
    }
  }, [checkedItems, showDropDown]);

  const handleCheck = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setCheckedItems([...checkedItems, value]);
      console.log(checkedItems);
    } else {
      const filtered = checkedItems.filter((product) => product !== value);
      setCheckedItems(filtered);
    }
  };

  return (
    <>
      <div className="bugs">
        <p>What product(s) did you have an issue with?</p>
        <div className="productDiv">
          <div
            ref={inputRef}
            onClick={() => handleClick()}
            className="dropDownInput"
          >
            <p>select Produt(s)</p>
            <div className="productNumber">
              {checkedItems.length === 1 &&
                `${checkedItems.length} product Selected`}
              {checkedItems.length > 1 &&
                `${checkedItems.length} products Selected`}
            </div>
          </div>
          {showDropDown && (
            <div className="dropDownContent">
              <label htmlFor="product1">
                <input
                  onChange={(e) => handleCheck(e)}
                  checked={checkedItems.includes("product1") ? true : false}
                  value="product1"
                  id="product1"
                  type="checkbox"
                />
                product1
              </label>
              <label htmlFor="product2">
                <input
                  onChange={(e) => handleCheck(e)}
                  checked={checkedItems.includes("product2") ? true : false}
                  value="product2"
                  id="product2"
                  type="checkbox"
                />
                product2
              </label>
              <label htmlFor="product3">
                <input
                  onChange={(e) => handleCheck(e)}
                  checked={checkedItems.includes("product3") ? true : false}
                  value="product3"
                  id="product3"
                  type="checkbox"
                />
                product3
              </label>
            </div>
          )}
        </div>

        <div className="toggle">
          <p>What was it?</p>
          <div className="problemBtns">
            <div>
              <label className="btnLabel" htmlFor="one">
                <input type="radio" id="one" name="problems" />
                <span>One Problem</span>
              </label>
            </div>
            <div>
              <label htmlFor="various">
                <input type="radio" id="various" name="problems" />
                <span>various problems</span>
              </label>
            </div>
          </div>
        </div>
        <div className="problemText">
          <p>What problem(s) did you encounter</p>
          <textarea></textarea>
        </div>
      </div>
    </>
  );
}
