import { useContext } from 'react';
import { InventoryContext } from "../contexts/InventoryContextProvider";

const useExtractProductDetails = (productIds) => {
    const {
      inventory: { products },
    } = useContext(InventoryContext);

  return productIds.map((pid) => products.find((product) => product.productId === pid));
}

export default useExtractProductDetails