import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div>
        <div className="cardmaindiv">
          <div className="card" style={{ width: "18rem" }}>
            <img src={this.props.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-title">{this.props.name}</p>
              <h5 className="card-text">Rs {this.props.price}</h5>
              <p className="">{this.props.location}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
