import React from "react";

import "./character.styles.scss";
const data = require("../../big5.json");

const Character = ({ children, id, selected, setSelected }) => {
  const big5 = data[children];
  return (
    <div className="character">
      <span
        onClick={() => {
          console.log(id, selected);
          setSelected(id === selected ? null : id);
        }}
      >
        {children}
      </span>
      {selected === id && big5 ? (
        <img src={`/cjdict/${big5}.JPG`} alt={big5} />
      ) : null}
    </div>
  );
};

export default Character;
