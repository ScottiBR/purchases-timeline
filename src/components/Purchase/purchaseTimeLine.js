import React from "react";
import check from "../../assets/icons/check.svg";
import CardBox from "../CardBox";
import PurchaseTable from "./purchaseTable";
export default function PurchaseTimeLine({ purchaseList }) {
  const { purchases } = purchaseList;

  return (
    <div className="timeline-container">
      {purchases.map(purchase => {
        return (
          <div className="timeline__item" key={purchase.id}>
            <img className="timeline-badge" src={check} alt={"Checked Icon"} />
            <CardBox
              cardStyle="card--animation-slide"
              childrenStyle="card--indicator"
            >
              <PurchaseTable purchase={purchase} />
            </CardBox>
          </div>
        );
      })}
    </div>
  );
}
