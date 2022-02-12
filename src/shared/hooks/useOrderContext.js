import { useContext } from "react";
import { InventoryContext } from "../contexts/InventoryContextProvider";
import { OrderContext } from "../contexts/OrderContextProvider";
import { UserContext } from "../contexts/UserContextProvider";

export const useOrderContext = (userId = null) => {
  const {
    inventory: { products },
  } = useContext(InventoryContext);
  const {
    users: { users },
  } = useContext(UserContext);
  const {
    order: { orders },
    orderDispatch,
  } = useContext(OrderContext);

  var filteredOrders = orders;

  if (userId !== null) {
    filteredOrders = orders.filter((order) => order.userId === userId);
  }

  const newOrders = filteredOrders.map((order) => {
    return {
      ...order,
      user: users.find((user) => user.userId === order.userId),
      list: order.list.map((item) => {
        return {
          ...products.find((product) => product.productId === item.productId),
          ...item,
        };
      }),
    };
  });

  return { orders: newOrders, orderDispatch };
};
