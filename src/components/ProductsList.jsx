import { ProductsRendering } from "../helpers/ProductsRendering";
import { ProductsItem } from "./ProductsItem";

import "../styles/ProductsList.css"

export const ProductsList = () => {
  return (
    <ul className="productList">
      {ProductsRendering.map((product) => {
        return (
          <ProductsItem
            key={product.id}
            id={product.id}
            productImage={product.productImage}
            productName={product.productName}
          />
        );
      })}
    </ul>
  );
};
