import React, { createContext, useReducer } from "react";

export const OrderContext = createContext();

const reducer = (state, action) => {
  console.log(action.payload);
  let newState = { ...state };
  let order = newState.orders.find(
    (item) => item.orderId === action.payload.orderId
  );
  switch (action.type) {
    case "ADD_ORDER":
      let orderId =
        newState.orders.length !== 0
          ? parseInt(newState.orders.at(-1).orderId) + 1
          : 1;
      newState.orders.push({ orderId: orderId.toString(), ...action.payload });
      return newState;
    case "DELETE":
      newState.orders.filter((item) => item.orderId !== action.payload);
      return newState;
    case "SET_ORDER_STATUS":
      order.status = action.payload.status;
      return newState;
    case "ATTACH_MESSAGE":
      order.convo.push({
        userId: action.payload.userId,
        message: action.payload.message,
        datetime: action.payload.datetime,
      });
      return newState;
    default:
      return state;
  }
};

const OrderContextProvider = ({ children }) => {
  const [order, orderDispatch] = useReducer(reducer, {
    orders: [
      {
        orderId: "1",
        userId: "2",
        date: "2/10/2022",
        list: [
          { productId: "1", quantity: 5 },
          { productId: "11", quantity: 2 },
          { productId: "13", quantity: 2 },
        ],
        status: "Preparing",
        convo: [
          { userId: "2", message: "How Long?", datetime: "Mon Feb 10 2022" },
          {
            userId: "1",
            message: "Not that much don't worry",
            datetime: "Mon Feb 10 2022",
          },
          { userId: "2", message: "Very well", datetime: "Mon Feb 11 2022" },
          { userId: "1", message: "Thank you", datetime: "Mon Feb 11 2022" },
        ],
      },
      {
        orderId: "2",
        userId: "3",
        date: "1/8/2022",
        list: [
          { productId: "3", quantity: 3 },
          { productId: "11", quantity: 2 },
          { productId: "13", quantity: 2 },
        ],
        status: "Packing",
        convo: [
          { userId: "3", message: "How Long?", datetime: "Mon Feb 10 2022" },
          {
            userId: "1",
            message: "Not that much don't worry",
            datetime: "Mon Feb 10 2022",
          },
          { userId: "3", message: "Very well", datetime: "Mon Feb 11 2022" },
          { userId: "1", message: "Thank you", datetime: "Mon Feb 11 2022" },
        ],
      },
      {
        orderId: "3",
        userId: "4",
        date: "2/10/2022",
        list: [
          { productId: "5", quantity: 1 },
          { productId: "11", quantity: 2 },
          { productId: "13", quantity: 2 },
        ],
        status: "Packing",
        convo: [
          { userId: "4", message: "How Long?", datetime: "Mon Feb 10 2022" },
          {
            userId: "1",
            message: "Not that much don't worry",
            datetime: "Mon Feb 10 2022",
          },
          { userId: "4", message: "Very well", datetime: "Mon Feb 11 2022" },
          { userId: "1", message: "Thank you", datetime: "Mon Feb 11 2022" },
        ],
      },
      {
        orderId: "4",
        userId: "5",
        date: "1/11/2022",
        list: [
          { productId: "7", quantity: 2 },
          { productId: "11", quantity: 2 },
          { productId: "13", quantity: 2 },
        ],
        status: "Shipped",
        convo: [
          { userId: "5", message: "How Long?", datetime: "Mon Feb 10 2022" },
          {
            userId: "1",
            message: "Not that much don't worry",
            datetime: "Mon Feb 10 2022",
          },
          { userId: "5", message: "Very well", datetime: "Mon Feb 11 2022" },
          { userId: "1", message: "Thank you", datetime: "Mon Feb 11 2022" },
        ],
      },
      {
        orderId: "5",
        userId: "6",
        date: "1/18/2022",
        list: [
          { productId: "8", quantity: 1 },
          { productId: "11", quantity: 2 },
          { productId: "13", quantity: 2 },
        ],
        status: "Preparing",
        convo: [
          { userId: "6", message: "How Long?", datetime: "Mon Feb 10 2022" },
          {
            userId: "1",
            message: "Not that much don't worry",
            datetime: "Mon Feb 10 2022",
          },
          { userId: "6", message: "Very well", datetime: "Mon Feb 11 2022" },
          { userId: "1", message: "Thank you", datetime: "Mon Feb 11 2022" },
        ],
      },
    ],
  });

  return (
    <OrderContext.Provider value={{ order, orderDispatch }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
