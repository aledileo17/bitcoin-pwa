import React, { Component } from "react";
import CryptoPrinter from "./CryptoPrinter";
import "bulma/css/bulma.css";
import "font-awesome/css/font-awesome.css";
import coinlist from "coinlist";

class App extends Component {
  state = {
    time: "",
    currentCoin: "",
    currentCurrency: "",
    coinArray: ["BTC"],
    coinList1: []
  };

  componentDidMount() {
    this.setState(new Date(Date.now()));
    let d = new Date();
    let hours = d.getHours().toString();
    let minutes = d.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    } else {
      minutes = minutes.toString();
    }
    this.setState({ time: hours + ":" + minutes });

    coinlist.map(coin =>
      this.setState(prevState => ({
        coinList1: [...prevState.coinList1, coin]
      }))
    );
  }

  coinHandler = event => {
    this.setState({ currentCoin: event.target.value.toUpperCase() });
  };

  currencyHandler = event => {
    this.setState({ currentCurrency: event.target.value.toUpperCase() });
  };

  addCoinHandler = async () => {
    this.setState(prevState => ({
      coinArray: [...prevState.coinArray, this.state.currentCoin]
    }));
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="has-text-centered is-mediumm"
          style={{ marginTop: "48px" }}
        >
          <span className="is-size-6 has-text-grey-light has-text-weight-light">
            Last update was at {this.state.time}
          </span>
        </div>

        {this.state.coinArray.map(coin => (
          <CryptoPrinter coin={coin} currency={"USD"} key={coin} />
        ))}

        <div className="section">
          <div className="field">
            <div className="control">
              <input
                type="text"
                list="coins"
                onChange={this.coinHandler}
                className="input"
                placeholder="Select Coin"
              />
            </div>
            <datalist id="coins">
              {this.state.coinList1.map(coin => (
                <option value={coin.symbol} key={coin.id} />
              ))}
            </datalist>
          </div>
          <div className="field">
            <div className="control">
              <input
                className="input"
                type="text"
                onChange={this.currencyHandler}
                placeholder="Select Currency"
                value="USD"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button" onClick={this.addCoinHandler}>
                Add
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
