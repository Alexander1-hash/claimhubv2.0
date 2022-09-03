import React, { Component } from "react";
import "../stylesheet/confirmation.css";

export class Confirmation extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  previous = (e) => {
    e.preventDefault();
    this.props.previousStep();
  };
  render() {
    const {
      values: {
        FirstName,
        LastName,
        ContactNumber,
        Email,
        Reference,
        Agreement,
      },
    } = this.props;

    const axios = require("axios").default;
    let token = "rqcd9R5W9s9ZbMQE6ZVPXFn5";

    const options = {
      method: "POST",
      url: "https://api.claimable.com/contacts",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {
        is_business: false,
        first_name: FirstName,
        last_name: LastName,
        email: Email,
        home_phone: ContactNumber,
        identity_card_no: Reference,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    return (
      <form>
        <div className="confirm-title">
          <h2>Confirm user details</h2>
        </div>

        <div className="confirm-box">
          <ul>
            <li>Firstname:{FirstName}</li>
            <li>Lastname: {LastName}</li>
            <li>Number: {ContactNumber}</li>
            <li>Email: {Email}</li>
            <li>Reference: {Reference}</li>
            <li>Agreement: {Agreement}</li>
          </ul>
        </div>

        <div className="confirm-btn-group">
          <button
            className="confirm-backform-btn"
            type="submit"
            onClick={this.previous}
          >
            Back
          </button>
          <button className="confirm-btn" type="submit" onClick={this.continue}>
            Continue
          </button>
        </div>
      </form>
    );
  }
}

export default Confirmation;
