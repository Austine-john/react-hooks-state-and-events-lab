import React, { useState } from "react";

function Item({ name, category }) {
  // track whether this item is in the cart
  const [inCart, setInCart] = useState(false);

  function handleAddToCartClick() {
    // toggle the state
    setInCart((prev) => !prev);
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
        className={inCart ? "remove" : "add"} 
        onClick={handleAddToCartClick}
      >
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
