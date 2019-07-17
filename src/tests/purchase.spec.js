import assert from "assert";
import { getPurchasesHistory } from "../actions/Purchases";
import { GET_PURCHASES_HISTORY } from "../constants/ActionTypes";
import Reducer from "../reducers/Purchases";
import fakeEndPoint from "./fakeEndPoint.json";
describe("Purchase TimeLine", () => {
  it("should create an action GET_PURCHASES_HISTORY with the given data ", () => {
    const action = { type: GET_PURCHASES_HISTORY, payload: fakeEndPoint };
    assert.deepEqual(getPurchasesHistory(fakeEndPoint), action);
  });
  it("should sort purchases desc ", () => {
    const action = { type: GET_PURCHASES_HISTORY, payload: fakeEndPoint };
    const state = Reducer({}, action);
    assert.equal(state.purchases[0].id, "3029386");
  });
  it("should group products into purchase by transaction id ", () => {
    const action = { type: GET_PURCHASES_HISTORY, payload: fakeEndPoint };
    const state = Reducer({}, action);
    const purchase = state.purchases.find(
      purchase => purchase.id === "3029384"
    );
    assert.equal(purchase.products.length, 3);
  });
});
