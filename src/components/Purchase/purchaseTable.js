import React from "react";
import PurchaseTableRow from "./PurchaseTableRow";
import HeaderCellWithIcon from "../Table/HeaderCellWithIcon";
import calendar from "../../assets/icons/calendar.svg";
import clock from "../../assets/icons/clock.svg";
import place from "../../assets/icons/place.svg";
import money from "../../assets/icons/money.svg";
import { PRODUCT, PRICE, currencyFormatter } from "../../constants/Util";
const PurchaseTable = ({ purchase }) => {
  const { id, timeStamp, store, revenue, products } = purchase;

  return (
    <table className="table-container">
      <thead className="table-header">
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
        <tr>
          <th className="table-body-cell table-body-cell--title-bold">
            {PRODUCT}
          </th>
          <th />
          <th />
          <th className="table-body-cell  table-body-cell--title-bold">
            {PRICE}
          </th>
        </tr>
      </thead>
      <tbody className="table-body table-row-align-left">
        {products &&
          products.map(product => <PurchaseTableRow product={product} />)}
      </tbody>
    </table>
  );
};
export default PurchaseTable;
