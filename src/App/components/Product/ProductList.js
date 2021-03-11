import React from "react";
import ProductCardList from "./ProductCardList";

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((prod, i) => (
        <ProductCardList key={i} product={prod} />
      ))}
    </div>
  );
}

export default ProductList;
