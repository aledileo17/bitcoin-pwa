import React, { Component } from "react";
import "bulma/css/bulma.css";

class CryptoPrinter extends Component {
  state = {
    price: ""
  };

  componentDidMount() {
    fetch(
      `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${
        this.props.coin
      }&tsyms=${this.props.currency}`
    )
      .then(response => response.json())
      .then(price =>
        this.setState({
          price: price[this.props.coin][this.props.currency]
        })
      );

  }

  render() {
    return (
      <section className="section has-text-centered">
        <h2 className="subtitle">
          {this.props.coin} - {this.props.currency}
        </h2>
        <h1 className="title is-size-1-mobile">${this.state.price}</h1>
      </section>
    );
  }
}

export default CryptoPrinter;
