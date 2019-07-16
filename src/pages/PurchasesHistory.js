import React, { useReducer, useEffect } from "react";
import PurchaseContext from "../context/PurchaseContext";
import PurchaseReducer from "../reducers/Purchases";
import { getPurchasesHistory } from "../actions/Purchases";

const PurchasesHistory = () => {
  const [state, dispatch] = useReducer(PurchaseReducer);
  useEffect(() => {
    const getData = async planetId => {
      const response = await fetch(
        `https://storage.googleapis.com/dito-questions/events.json`
      );
      const data = await response.json();
      dispatch(getPurchasesHistory(data));
    };

    getData();
  }, []);

  return (
    <PurchaseContext.Provider state>
      <div>
        <h1>hello</h1>
      </div>
    </PurchaseContext.Provider>
  );
};

export default PurchasesHistory;
