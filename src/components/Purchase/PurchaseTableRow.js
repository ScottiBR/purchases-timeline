import React from "react";
import { currencyFormatter } from "../../constants/Util";
const PurchaseTableRow = ({ product }) => {
  const { price, name } = product;

  return (
    <tr key={name}>
      <td className="table-body-cell">{name}</td>
      <td />
      <td />
      <td className="table-body-cell">{currencyFormatter.format(price)}</td>
    </tr>
  );
};
export default PurchaseTableRow;
