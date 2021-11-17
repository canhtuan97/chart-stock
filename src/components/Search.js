import React, { useState } from "react";
import { Tooltip } from "antd";

const Search = (props) => {
  const [className, setClassName] = useState("");
  const [input,setInput] = useState("")
  const handleForcus = () => {
    setClassName("active");
  };
  const handleRemoveForcus = () => {
    setClassName("");
  };

  const handleChangeInput = (e) =>{
    console.log(e.target.value);
    // setInput(e.target.value)
  }

  const textLeft = <span className="toolip-custom">Find other pairs with this token</span>;
  const textRight = <span className="toolip-custom">Click to filter by exchange</span>;
  return (
    <div className="search col-lg-4">
      <div className="search-container">
        <form  className="search-form">
          <Tooltip placement="left" title={textLeft}>
            <div className="dflex">
              <i class="fas fa-binoculars search-icon icon-left "></i>
            </div>
          </Tooltip>
          <div className={`form-gr`}>
            <i class="fas fa-search "></i>
            <input
              value={input}
              onChange={handleChangeInput}
              className={`${className}`}
              onFocus={handleForcus}
              onBlur={handleRemoveForcus}
              type="text"
              placeholder="Search pair by symbol, name, pair contract or token contract"
            ></input>
            <Tooltip placement="left" title={textRight}>
                <span>
                <i class={`fas fa-filter search-icon icon-right ${className}`} ></i>
                </span>
               
            </Tooltip>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
