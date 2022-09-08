import React, { useDebugValue, useEffect, useState } from "react";

export default function Bugs() {
  const [showDropDown, setShowDropDown] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);

  const handleClick = () => {
    console.log("click");
    setShowDropDown(!showDropDown);
  };
  useEffect(() => {
    console.log(checkedItems);
  }, [checkedItems]);

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

        <div onClick={() => handleClick()} className="dropDownInput">
          <p>select Produt(s)</p>
          {checkedItems.length === 1 &&
            `${checkedItems.length} product Selected`}
          {checkedItems.length > 1 &&
            `${checkedItems.length} products Selected`}
        </div>
        {showDropDown && (
          <div className="dropDownContent">
            <label onChange={(e) => handleCheck(e)} htmlFor="product1">
              <input
                checked={checkedItems.includes("product1") ? true : false}
                value="product1"
                id="product1"
                type="checkbox"
              />
              product1
            </label>
            <label onChange={(e) => handleCheck(e)} htmlFor="product2">
              <input
                checked={checkedItems.includes("product2") ? true : false}
                value="product2"
                id="product2"
                type="checkbox"
              />
              product2
            </label>
            <label onChange={(e) => handleCheck(e)} htmlFor="product3">
              <input
                checked={checkedItems.includes("product3") ? true : false}
                value="product3"
                id="product3"
                type="checkbox"
              />
              product3
            </label>
          </div>
        )}
        <div className="toggle">
          <p>What was it?</p>
          <button>one</button>
          <button>two</button>
        </div>
        <div>
          <p>What problem(s) did you encounter</p>
          <textarea></textarea>
        </div>
      </div>
    </>
  );
}
