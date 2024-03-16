import Header from "./components/Header";
import { useState, useEffect } from "react";
import product from "./product.json";
import Product from "./components/Product";
import Basket from "./components/Basket";

import "./App.css";

function App() {
  const [money, setMoney] = useState(100);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const resetBasket = () => {
    setBasket([]);
  };
  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * product.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);
  return (
    <>
      <Header total={total} money={money} />
      <div className="container product">
        {product.map((product) => (
          <Product
            total={total}
            money={money}
            key={product.id}
            basket={basket}
            setBasket={setBasket}
            product={product}
          />
        ))}
      </div>
      {total > 0 && (
        <Basket
          total={total}
          resetBasket={resetBasket}
          product={product}
          basket={basket}
        />
      )}
    </>
  );
}

export default App;
