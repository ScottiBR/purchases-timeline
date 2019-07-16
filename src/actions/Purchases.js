import { GET_PURCHASES_HISTORY } from "../constants/ActionTypes";

export const getPurchasesHistory = data => {
  return {
    type: GET_PURCHASES_HISTORY,
    payload: data
  };
};
