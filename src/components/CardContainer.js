import Card from "./Card";

const CardContainer = ({ products, addToCart }) => {
  
  const renderCards = (products) => {
    return products.map((prod) => {
      return (
        <Card key={prod.id.$t} prod={prod} 
          addToCart={addToCart} 
        />);
    });
  };

  return (
    <div className="product__card-container">
      {/* conditionally rendering so it doesn't break on initial page load */}
      {products && renderCards(products)}
    </div>
  );
};

export default CardContainer;
