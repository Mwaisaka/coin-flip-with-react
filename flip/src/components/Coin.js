import React, { Component } from "react";

class Coin extends Component {
  render() {
    return (
      <div class="Coin">
        <img
          style={{ width: "400px", height: "400px" }}
          src={this.props.info.imgSrc}
        />
      </div>
    );
  }
}

export default Coin;
