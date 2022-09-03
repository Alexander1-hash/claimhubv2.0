import React, { Component } from "react";
import "../stylesheet/signature.css";

export class Signature extends Component {
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
        "Content-Type": "multipart/form-data",
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
        social_security_no: Agreement,
      },
    };
    const submit = () => {
      if (Agreement) {
        axios
          .request(options)
          .then(function (response) {
            console.log(response.data);
            alert("We have received your claim");
          })
          .catch(function (error) {
            console.error(error);
            alert("Submission was unsuccessful");
          });
      }
    };

    const { values, handleChange } = this.props;
    return (
      <div>
        <form className="sigdetails-form" onSubmit={submit}>
          <h1>Page 3 (Terms of Service)</h1>
          <br />
          <h2>
            Please carefully read before signing your documents and the
            following statements:
          </h2>
          <br />
          <p>
            I understand that ClaimHub will be appointed as my agent to enable
            them to submit refund claims to the relevant parties on my behalf
            and reclaim any monies duly bound to me.
          </p>
          <br />
          <label for="agreement">
            I have read the claim documents and agree to the Letter of
            Authority, Agency Agreement and Terms of Engagement and understand
            that my signature will be used on my claim form(s) sent to the
            relevant parties to process my claim.
          </label>
          <input
            id="agreement"
            name="agreement"
            type="checkbox"
            placeholder="checkbox"
            onChange={handleChange("Agreement")}
            required
          />
          <br />
          <p>
            When you click submit, we will receive your personal information. We
            may email you to request further documents in order to begin
            processing your claim(s). We will handle your data in accordance
            with our Privacy Policy
          </p>
          <br />
          <div className="sig-btn-group">
            <button
              className="sig-backform-btn"
              type="submit"
              onClick={this.previous}
            >
              Back
            </button>
            <button className="sig-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signature;
