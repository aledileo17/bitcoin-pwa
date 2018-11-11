import React, { useState, Fragment } from "react";
import CryptoPrinter from "./CryptoPrinter";
// import "bulma/css/bulma.css";
import "./App.css";

const App = () => {
  const [currentCoin, setCurrentCoin] = useState("");
  const [coins, addCoins] = useState([]);
  const [input, setInput] = useState("");

  function inputHandler(event) {
    setInput(event.target.value);
    setCurrentCoin(event.target.value.toUpperCase());
  }

  function clickHandler() {
    addCoins([...coins, currentCoin]);
    setInput("");
  }

  return (
    <Fragment>
      <div className="section">
        <div className="field">
          <div className="control">
            <input
              value={input}
              onChange={inputHandler}
              className="input"
              placeholder="Select Coin"
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button" onClick={clickHandler}>
              Add coin
            </button>
          </div>
        </div>
      </div>

      {coins.map(coin => (
        <CryptoPrinter coin={coin} currency={"USD"} key={coin} />
      ))}
    </Fragment>
  );
};

export default App;
