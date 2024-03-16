import React from "react";
import BasketItem from "./BasketItem";

function Basket({ basket, resetBasket, total, product }) {
  return (
    <>
      <div className="basket-container container">
        <h3>Alışveriş Detayları</h3>
        {basket.map((item) => (
          <BasketItem
            item={item}
            product={product.find((p) => p.id === item.id)}
          />
        ))}
        <div className="total">Total: ${total}</div>
        {total > 0 && (
          <button className="basket-reset" onClick={resetBasket}>
            Sepeti Temizle
          </button>
        )}
      </div>
      <style jsx>{`
        .basket-container {
          padding: 20px;
          background: #fff;
          border: 1px solid #ddd;
        }
        .basket-container h3 {
          font-size: 20px;
          margin-bottom: 15px;
        }
        .basket-container .total {
          border-top: 1px solid #ddd;
          padding-top: 10px;
          margin-top: 10px;
          font-size: 18px;
          font-weight: bold;
          text-align: right;
          color: green;
        }
        .basket-container .basket-reset {
          background: #61dafb;
          height: 40px;
          padding: 0 20px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

export default Basket;
