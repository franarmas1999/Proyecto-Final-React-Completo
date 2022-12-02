import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import cartContext from "../../storage/CartContext";
import { Link } from "react-router-dom";

function ItemDetail({ product }) {
  const [isInCart, setIsInCart] = useState(false);

  const { addToCart } = useContext(cartContext);

  function onAddToCart(count) {

    const itemForCart = {
      ...product,
      count,
    };

    addToCart(itemForCart);
    setIsInCart(true);
  }

  return (
    <div className="card-detail">
      <div className="card-detail_img">
        <img src={product.img} alt="Product img"/>
      </div>
      <div className="card-detail_detail">
        <h2>{product.title}</h2>
        <h4 className="priceTag">{product.price}</h4>
      </div>
      {!isInCart ? (
        <ItemCount
          text="Agregar al carrito"
          onAddToCart={onAddToCart}
          stock={product.stock}
        />
      ) : (
        <div>
          <Link to="/cart">
            <button>Ir al Carrito</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default ItemDetail;
