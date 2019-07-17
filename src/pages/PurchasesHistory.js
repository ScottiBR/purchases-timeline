import React, { useReducer, useEffect } from "react";
import PurchaseReducer from "../reducers/Purchases";
import { getPurchasesHistory } from "../actions/Purchases";
import PurchaseTimeLine from "../components/Purchase/purchaseTimeLine";

const PurchasesHistory = () => {
  const [purchaseList, dispatch] = useReducer(PurchaseReducer);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://storage.googleapis.com/dito-questions/events.json`
      );
      const data = await response.json();
      dispatch(getPurchasesHistory(data));
    };

    getData();
  }, []);

  return (
    <div className="main-container">
      {purchaseList && <PurchaseTimeLine purchaseList={purchaseList} />}
    </div>
  );
};

export default PurchasesHistory;
