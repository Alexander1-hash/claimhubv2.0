import React, { Component } from "react";
import "../stylesheet/refdetails.css";

export class ReferenceDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  previous = (e) => {
    e.preventDefault();
    this.props.previousStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <form className="referencedetail-form" onSubmit={this.continue}>
          <h1>Page 2 (Claim Form)</h1>
          <br />

          <input
            type="text"
            placeholder="Letter Reference (on the letter we sent you)"
            onChange={handleChange("Reference")}
          />
          <br />
          <p>
            *If we have sent a letter to you claiming to have identified monies
            owed to you, this means that we have undertaken extensive research
            and are almost certain that the money identified is duly bound to
            you. Your total claim may even be in excess of the figure stated in
            our letter. Notwithstanding this, we cannot disclose this
            information until you have signed-up, confirming our authority to
            act on your behalf
          </p>
          <br />
          <div className="ref-btn-group">
            <button
              className="backform-btn"
              type="submit"
              onClick={this.previous}
            >
              Back
            </button>
            <button className="ref-btn" type="submit">
              Continue
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ReferenceDetails;
