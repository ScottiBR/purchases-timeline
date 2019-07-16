import { GET_PURCHASES_HISTORY } from "../constants/ActionTypes";
import moment from "moment";
import {
  EVENT_COMPROU_PRODUTO,
  EVENT_COMPROU,
  TRANSACTION_ID,
  STORE_NAME,
  PRODUCT_NAME,
  PRODUCT_PRICE
} from "../constants/KeyTypes";

export default (state, action) => {
  switch (action.type) {
    case GET_PURCHASES_HISTORY:
      return retrivePurchasesAndProducts(state, action.payload);

    default:
      return state;
  }
};

const retrivePurchasesAndProducts = (state, payload) => {
  let separateEvents = payload.events.reduce(reduceEvents, {
    purchase: [],
    product: []
  });
  const purchases = groupProducts(separateEvents).sort(sortTimeStampDesc);
  return {
    ...state,
    purchases
  };
};

const reduceEvents = (separated, e) => {
  if (e.event === EVENT_COMPROU_PRODUTO) {
    separated.product.push(transformProduct(e));
  } else if (e.event === EVENT_COMPROU) {
    separated.purchase.push(transformPurchase(e));
  }
  return { ...separated };
};

const transformProduct = ({ timestamp, custom_data }) => {
  return {
    id: findKey(custom_data, TRANSACTION_ID),
    timeStamp: moment(timestamp),
    price: findKey(custom_data, PRODUCT_PRICE),
    product: findKey(custom_data, PRODUCT_NAME)
  };
};
const transformPurchase = ({ timestamp, revenue, custom_data }) => {
  return {
    id: findKey(custom_data, TRANSACTION_ID),
    timeStamp: moment(timestamp),
    store: findKey(custom_data, STORE_NAME),
    revenue
  };
};

const findKey = (data, key) => {
  const pair = data.find(value => value.key === key);
  return pair ? pair.value : null;
};

const groupProducts = ({ purchase, product }) => {
  return purchase.map(value => {
    return { ...value, products: product.filter(p => p.id === value.id) };
  });
};

const sortTimeStampDesc = (a, b) =>
  moment.utc(b.timeStamp).diff(moment.utc(a.timeStamp));
