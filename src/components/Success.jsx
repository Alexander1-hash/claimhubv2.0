import React, { Component } from "react";
import "../stylesheet/success.css";

export class Success extends Component {
  continue = (e) => {};
  render() {
    return (
      <div className="succ-box">
        <h1>Thank you for your claim!</h1>
        <p>
          One of our agents will contact you shortly with further instructions
        </p>
      </div>
    );
  }
}

export default Success;
