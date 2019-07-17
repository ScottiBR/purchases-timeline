import React, { useReducer, useEffect } from "react";
import PurchaseReducer from "../reducers/Purchases";
import { getPurchasesHistory } from "../actions/Purchases";
import check from "../assets/icons/check.svg";
import CardBox from "../components/CardBox";
import PurchaseTable from "../components/Purchase/purchaseTable";

const PurchasesHistory = () => {
  const [purchaseList, dispatch] = useReducer(PurchaseReducer);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://storage.googleapis.com/dito-questions/events.json`
        );
        const data = await response.json();
        dispatch(getPurchasesHistory(data));
      } catch (err) {
        alert(err);
      }
    };

    getData();
  }, []);
  return (
    <div className="timeline">
      {purchaseList &&
        purchaseList.purchases.map(purchase => {
          return (
            <div className="timeline__item" key={purchase.id}>
              <img
                className="timeline__badge"
                src={check}
                alt={"Checked Icon"}
              />
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
};

export default PurchasesHistory;
