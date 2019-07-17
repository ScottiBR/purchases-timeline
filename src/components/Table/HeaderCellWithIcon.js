import React from "react";

const HeaderCellWithIcon = ({ icon, title }) => {
  return (
    <th className="table-head-cell">
      <img className="table-head-cell__img" src={icon} alt={title} />
      <span className="table-head-cell__title"> {title}</span>
    </th>
  );
};
export default HeaderCellWithIcon;
