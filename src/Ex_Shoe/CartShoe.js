import React, { Component } from "react";

export default class CartShoe extends Component {
  render() {
    let { cart, handleRemove, handleCartQuantity } = this.props;
    console.log("😊 ~ CartShoe ~ render ~ cart:", cart);

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>
                  <img style={{ width: 50 }} src={item.image} alt="" />
                </td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => handleCartQuantity(item.id, 1)}
                  >
                    +
                  </button>
                  <span className="mx-3">{item.cartQuantity}</span>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleCartQuantity(item.id, -1)}
                  >
                    -
                  </button>
                </td>
                <td>{item.price}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemove(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
