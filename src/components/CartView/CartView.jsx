//COMP CART VIEW, ACA VAMOS A DARLE FORMATO HTML AL CARRITO
//USAMOS CONTEXT

import React, { useContext } from "react";
import cartContext from "../../storage/CartContext";
import Button from "../Button/Button";

function CartView() {
  const { cart, clear, removeItem, totalPriceInCart } = useContext(cartContext);

  if (cart.length === 0) return <h1>Carrito Vacio</h1>;

  return (
    <div>
      <h1>ORDEN DE COMPRA</h1>
      {cart.map((cartItem) => (
        <div key={cartItem.id}>
          <img src={cartItem.img} alt={cartItem.title} />
          <h3>{cartItem.title}</h3>
          <h4>{cartItem.price}</h4>
          <h4>Cantidad: {cartItem.count}</h4>
          <h4>Precio a pagar: {cartItem.count * cartItem.price}</h4>
          <Button onClick={() => removeItem(cartItem.id)} type="danger">
            Eliminar 
          </Button>
        </div>
      ))}
      <Button type="danger" onClick={clear}>
        Vaciar Carrito
      </Button>
      <h2>Total a pagar: ${totalPriceInCart()}</h2>
    </div>
  );
}

export default CartView;
