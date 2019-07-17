import React from "react";

const CardBox = ({ children, cardStyle = "", childrenStyle = "" }) => {
  return (
    <div className={`card ${cardStyle}`}>
      <div className={`card__body ${childrenStyle}`}>{children}</div>
    </div>
  );
};
export default CardBox;
