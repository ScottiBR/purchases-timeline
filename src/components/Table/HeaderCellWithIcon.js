import React from "react";

const HeaderCellWithIcon = ({ icon, title }) => {
  return (
    <th className="table-header-cell">
      <img className="table-header-cell__img" src={icon} alt={title} />
      <span className="table-header-cell__title"> {title}</span>
    </th>
  );
};
export default HeaderCellWithIcon;
