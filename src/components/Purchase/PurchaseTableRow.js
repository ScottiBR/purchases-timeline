import React from "react";
import { currencyFormatter } from "../../constants/Util";
const PurchaseTableRow = ({ product }) => {
  const { price, name } = product;

  return (
    <tr className="table-body__row">
      <td className="table-body__cell">{name}</td>
      <td />
      <td />
      <td className="table-body__cell">{currencyFormatter.format(price)}</td>
    </tr>
  );
};
export default PurchaseTableRow;
