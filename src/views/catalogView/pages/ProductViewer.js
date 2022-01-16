import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { InventoryContext } from '../../../shared/contexts/InventoryContextProvider';
import { OrderContext } from '../../../shared/contexts/OrderContextProvider';
import { UserContext } from '../../../shared/contexts/UserContextProvider';
import './ProductViewer.css'

const ProductViewer = () => {
  const productId = useParams().productId;
  const {
    inventory: { products },
  } = useContext(InventoryContext);
  const {
    users: { users },
  } = useContext(UserContext);
  const {
    order: { orders },
  } = useContext(OrderContext);

    return (
        <div className = 'product-viewer'>
            {productId}
        </div>
    )
}

export default ProductViewer
