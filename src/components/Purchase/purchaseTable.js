import React from "react";
import PurchaseTableRow from "./PurchaseTableRow";
import HeaderCellWithIcon from "../Table/HeaderCellWithIcon";
import calendar from "../../assets/icons/calendar.svg";
import clock from "../../assets/icons/clock.svg";
import place from "../../assets/icons/place.svg";
import money from "../../assets/icons/money.svg";
import { PRODUCT, PRICE, currencyFormatter } from "../../constants/Util";
const PurchaseTable = ({ purchase }) => {
  const { timeStamp, store, revenue, products } = purchase;

  return (
    <table className="table-container">
      <thead>
        <tr>
          <HeaderCellWithIcon
            icon={calendar}
            title={timeStamp.format("DD/MM/YYYY")}
          />
          <HeaderCellWithIcon icon={clock} title={timeStamp.format("hh:mm")} />
          <HeaderCellWithIcon icon={place} title={store} />
          <HeaderCellWithIcon
            icon={money}
            title={currencyFormatter.format(revenue)}
          />
        </tr>
      </thead>
      <tbody className="table-body">
        <tr className="table-body__row">
          <td className="table-body__cell table-body__cell--title-bold">
            {PRODUCT}
          </td>
          <td />
          <td />
          <td className="table-body__cell  table-body__cell--title-bold">
            {PRICE}
          </td>
        </tr>
        {products &&
          products.map(product => (
            <PurchaseTableRow product={product} key={product.name} />
          ))}
      </tbody>
    </table>
  );
};
export default PurchaseTable;
