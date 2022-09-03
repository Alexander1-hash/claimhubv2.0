import React, { Component } from "react";
import "../stylesheet/userdetails.css";

export class UserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;

    return (
      <div>
        <form className="userdetail-form" onSubmit={this.continue}>
          <h1>Page 1 (Personal Details)</h1>
          <br />
          <input
            type="text"
            placeholder="First name"
            onChange={handleChange("FirstName")}
            defaultValue={values.FirstName}
            name="FirstName"
            required
          />
          <br />
          <input
            type="text"
            placeholder="Last name"
            onChange={handleChange("LastName")}
            defaultValue={values.LastName}
            name="LastName"
            required
          />
          <br />
          <input
            type="number"
            placeholder="Number"
            onChange={handleChange("ContactNumber")}
            defaultValue={values.ContactNumber}
            name="ContactNumber"
            required
          />
          <br />
          <input
            type="email"
            placeholder="Email address"
            onChange={handleChange("Email")}
            defaultValue={values.Email}
            required
            name="Email"
          />
          <br />
          <button className="usr-btn" type="submit">
            Continue
          </button>
        </form>
      </div>
    );
  }
}

export default UserDetails;
