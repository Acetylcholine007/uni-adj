import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContextProvider";
import { InventoryContext } from "../contexts/InventoryContextProvider";
import { UserContext } from "../contexts/UserContextProvider";

export const useCart = () => {
  const {
    auth: { userId },
  } = useContext(AuthContext);
  const {
    inventory: { products },
  } = useContext(InventoryContext);
  const {
    users: { users },
  } = useContext(UserContext);

  const user = users.find((user) => user.userId === userId);
  if (user !== null) {
    let cartItems = user.cart.map((item) => {
      return {
        product: products.find((product) => product.productId === item.productId),
        quantity: item.quantity,
      };
    });
    return cartItems;
  }
  return null;
};
