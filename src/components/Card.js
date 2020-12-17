import React from "react";

const Card = ({ prod, addToCart }) => {
  const {
    id,
    link,
    gsx$name,
    gsx$description,
    gsx$priceincents,
    gsx$availability,
  } = prod;

  const available = gsx$availability.$t === "in_stock";
  const price = (parseInt(gsx$priceincents.$t) / 100).toFixed(2);

  const cartItem = {
    name: gsx$name.$t,
    id: id.$t,
    price,
  };

  return (
    // Sorry, I thought I was going to have more time for styling, hence all the classes
    <div className="product__card">
        <h2 className="product__name">{gsx$name.$t}</h2>
        <p className="product__card-content">{gsx$description.$t}</p>
      <div className="product__details">
        <h5 className="product__price">Price: ${price}</h5>
      </div>
      <button
        className="add-item-to-cart btn"
        disabled={!available}
        onClick={() => {
          addToCart(cartItem);
        }}
      >
        {available ? "Add to Cart" : "Sold Out"}
      </button>
    </div>
  );
};

export default Card;
