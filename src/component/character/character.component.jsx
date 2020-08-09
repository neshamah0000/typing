import React, { useContext } from "react";
import SelectedContext from "../../context/selected/selected.context";

import "./character.styles.scss";
const data = require("../../big5.json");

const Character = ({ children, id, correctness }) => {
  let correct = null;
  if (correctness !== undefined)
    correct = `character__${correctness ? "correct" : "wrong"}`;
  const { selected, setSelected } = useContext(SelectedContext);
  const big5 = data[children];
  return (
    <div className="character">
      <span className={correct} onClick={() => setSelected(id)}>
        {children}
      </span>
      {selected === id && big5 ? (
        <img src={`${process.env.REACT_APP_FILE_PATH}/${big5}.JPG`} alt={big5} />
      ) : null}
    </div>
  );
};

export default Character;
