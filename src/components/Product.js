import React from "react";

function Product({ product, basket, setBasket, total, money }) {
  const basketItem = basket.find((item) => item.id === product.id);

  const removeBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    const currentBasket = basket.find((item) => item.id === product.id);
    const basketWithoutCurrent = basket.filter(
      (item) => item.id !== product.id
    );
    currentBasket.amount -= 1;
    if (currentBasket.amount === 0) {
      setBasket([...basketWithoutCurrent]);
    } else {
      setBasket([...basketWithoutCurrent, currentBasket]);
    }
  };

  const addBasket = () => {
    const chechBasket = basket.find((item) => item.id === product.id);
    if (chechBasket) {
      chechBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        chechBasket,
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };
  console.log();
  return (
    <>
      <div className="product">
        <h3>{product.title}</h3>
        <h5>${product.price}</h5>
        <div className="actions">
          <button disabled={!basketItem} onClick={removeBasket}>
            Sil
          </button>
          <span className="amount">
            {(basketItem && basketItem.amount) || 0}
          </span>
          <button disabled={total + product.price > money} onClick={addBasket}>
            Ekle
          </button>
        </div>
        <style jsx>{`
          .product {
            padding: 10px;
            background: #fff;
            border: 1px solid#ddd;
            margin-bottom: 10px;
          }
        `}</style>
      </div>
    </>
  );
}

export default Product;
