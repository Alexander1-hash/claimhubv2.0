import React, { Component } from "react";
import UserDetails from "./UserDetails";
import "../stylesheet/userform.css";
import ReferenceDetails from "./ReferenceDetails";
import Signature from "./Signature";
import Confirmation from "./Confirmation";
import Success from "./Success";
import { useForm } from "react-hook-form";

export class UserForm extends Component {
  state = {
    step: 1,
    Title: "",
    FirstName: "",
    LastName: "",
    ContactNumber: "",
    Email: "",
    Reference: "",
    Agreement: false,
  };
  // go to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // go to previous step

  previousStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  //handle field input and change it to what user enters

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const { FirstName, LastName, ContactNumber, Email, Reference, Agreement } =
      this.state;

    const values = {
      FirstName,
      LastName,
      ContactNumber,
      Email,
      Reference,
      Agreement,
    };

    const PageDisplay = () => {
      switch (step) {
        case 1:
          return (
            <UserDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 2:
          return (
            <ReferenceDetails
              previousStep={this.previousStep}
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        //process form
        case 3:
          return (
            <Signature
              previousStep={this.previousStep}
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 4:
          return <Success />;
      }
    };

    return (
      <div className="userform-page">
        <div className="userform-title"></div>
        <div className="userform-wrapper">
          <div className="userform-body">
            <div className="userform-content">{PageDisplay()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserForm;
