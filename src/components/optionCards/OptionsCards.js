import React from "react";
import { Link } from "react-router-dom";

import "./optionCards.scss";

const OptionsCards = (props) => {
  return (
    <div className="options-wrapper">
      <div className="card h-100">
        {props.img}

        <button>{props.button}</button>
        <div className="description">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default OptionsCards;
