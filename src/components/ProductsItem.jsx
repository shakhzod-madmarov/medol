import "../styles/ProductsItem.css";

export const ProductsItem = ({ productImage, productName, productLink, id }) => {
  return (
    <li className="productsItem" id={id}>
      <img
        className="productImg"
        src={productImage}
        alt={productName + "-image"}
      />
      <div className="productContent">
        <p className="productName">{productName}</p>
        <a href={productLink} className="productLink">
          Посмотреть все
        </a>
      </div>
    </li>
  );
};
