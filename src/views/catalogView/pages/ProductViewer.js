import React from 'react'
import { useParams } from 'react-router-dom';
import './ProductViewer.css'

const ProductViewer = () => {
  const productId = useParams().productId;

    return (
        <div className = 'product-viewer'>
            {productId}
        </div>
    )
}

export default ProductViewer
