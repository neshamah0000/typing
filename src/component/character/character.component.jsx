import React, { useContext } from "react";
import SelectedContext from "../../context/selected/selected.context";

import "./character.styles.scss";
const data = require("../../big5.json");

const Character = ({ children, id }) => {
  const { selected, setSelected } = useContext(SelectedContext);
  const big5 = data[children];
  return (
    <div className="character">
      <span onClick={() => setSelected(id)}>{children}</span>
      {selected === id && big5 ? (
        <img src={`/cjdict/${big5}.JPG`} alt={big5} />
      ) : null}
    </div>
  );
};

export default Character;
