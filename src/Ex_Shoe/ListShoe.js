import React, { Component } from "react";
import ItemShoe from "./ItemShoe";

export default class ListShoe extends Component {
  render() {
    const { handleCart } = this.props;
    console.log(this.props);
    return (
      <div className="row">
        {this.props.list.map((item, index) => {
          return (
            <ItemShoe
              handleViewDetail={this.props.handleViewDetail}
              handleCart={handleCart}
              key={index}
              data={item}
            />
          );
        })}
      </div>
    );
  }
}
