import React from "react";

function Product(props) {
  return (
    <div>
      <p>{props.title.toUpperCase()}</p>
      <p>{props.price}</p>
      <p>{props.category}</p>
      <p>{props.description}</p>
      <img src={props.image} />
    </div>
  );
}

export default Product;
