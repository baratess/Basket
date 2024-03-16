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
        <img src={product.image} alt="###" />
        <h3>{product.title}</h3>
        <h5>${product.price}</h5>
        <div className="actions">
          <button
            className="sell-btn"
            disabled={!basketItem}
            onClick={removeBasket}
          >
            Sil
          </button>
          <span className="amount">
            {(basketItem && basketItem.amount) || 0}
          </span>
          <button
            className="buy-btn"
            disabled={total + product.price > money}
            onClick={addBasket}
          >
            Ekle
          </button>
        </div>
        <style jsx>{`
          .product {
            padding: 10px;
            background: #fff;
            border: 1px solid #ddd;
            margin-bottom: 10px;
          }
          .product h3 {
            font-size: 23px;
          }
          .product h5 {
            font-size: 18px;
          }
          .product .actions {
            display: flex;
            align-items: center;
          }
          .product img {
            width: 100%;
          }
          .actions button {
            height: 40px;
            padding: 0 15px;
            flex: 1;
            cursor: pointer;
            border: none;
          }
          .actions .sell-btn {
            background: lightgreen;
            color: red;
            font-size: 15px;
            font-weight: 500;
            border-radius: 0 4px 4px 0;
          }
          .actions button[disabled] {
            opacity: 0.3;
          }
          .actions .buy-btn {
            background: lightblue;
            color: #black;
            font-size: 15px;
            font-weight: 500;
            border-radius: 4px 0 0 4px;
          }
          .actions .amount {
            width: 50px;
            text-align: center;
            border: 1px solid;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: border;
            font-size: 17px;
            border-radius: 5px;
          }
        `}</style>
      </div>
    </>
  );
}

export default Product;
