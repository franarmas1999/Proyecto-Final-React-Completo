//COMPONENTE ITEM, LE DMAOS HTML A CADA PRODUCTO MEIDANTE CARDS
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./item.css";

function Item({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleFavorite() {
    setIsFavorite(!isFavorite);
  }

  let classButtonFavorite =
    isFavorite === true ? "card-favicon favorite" : "card-favicon";

  let urlDetail = `/detalle/${product.id}`;

  let stylePrice = { color: product.discount? 'green' : 'inherit' }
  
  return (
    <div className="card">
      <button onClick={handleFavorite} className={classButtonFavorite}>
        +
      </button>
      <div className="card-img">
        <img src={product.img} alt="Product img" />
      </div>
      <div className="card-detail">
        <h2>{product.title}</h2>
        <p>{product.model}</p>
        <h4 style={ stylePrice } className="priceTag">{product.price}</h4>
      </div>
      <Link to={urlDetail}>
        <Button>VER PRODUCTO</Button>
      </Link>
      <p>Cantidad: {product.stock}</p>
    </div>
  );
}

export default Item;
