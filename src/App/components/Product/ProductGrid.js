import React from "react";
import ProductCard from "./ProductCard";

function ProductGrid({ products }) {
  return (
    <div className="product-grid">
      {products.map((prod, i) => (
        <ProductCard key={i} product={prod} />
      ))}
    </div>
  );
}

export default ProductGrid;
