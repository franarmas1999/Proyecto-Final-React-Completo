//CONTEXTO

import { useState, createContext } from "react";

const cartContext = createContext();

export function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(itemData) {
    let itemFound = cart.find((itemInCart) => itemInCart.id === itemData.id);

    if (itemFound) {
      let newCart = cart.map((itemInCart) => {
        if (itemInCart.id === itemData.id) {
          itemInCart.count += itemData.count;
          return itemInCart;
        } else {
          return itemInCart;
        }
      });

      setCart(newCart);
    } else {
      const newCart = [...cart];
      newCart.push(itemData);
      setCart(newCart);
    }
  }

  function totalItemsInCart() {
    let total = 0;
    cart.forEach((itemInCart) => {
      total = total + itemInCart.count;
    });
    return total;
  }

  function totalPriceInCart() {
    return 8500;
  }

  function removeItem(itemId) {
    console.log("Removiendo el item", itemId);

  }


  const value = {
    cart,
    addToCart,
    totalItemsInCart,
    removeItem,
    totalPriceInCart
  };


  return (
    <cartContext.Provider value={value}>{props.children}</cartContext.Provider>
  );
}

export default cartContext;
