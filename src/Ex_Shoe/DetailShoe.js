import React, { Component } from "react";

export default class DetailShoe extends Component {
  render() {
    return (
      <div>
        <img src={this.props.detail.image} alt="" />
      </div>
    );
  }
}
