import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
import ClaimInfo from "./ClaimInfo";
import OtherInfo from "./OtherInfo";
import "../stylesheet/EvidenceForm.css"



const EvidenceForm = () => {

  const prevBtn = document.getElementsByClassName("form-prev-btn");
  const [page, setPage] = useState(0);

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    message: "",
    other: "",
  });


  // Submit it on Backend which is on

  const FormTitles = ["Claim Details", "Case Details", "Terms & Conditions", "other info"];

  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <ContactInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <ClaimInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="multistepform">
      <div className="multistepprogressbar">
        <h1>Claims Form</h1>

      </div>
      <div className="multistepform-container">
        <div className="multistep-header">
          <h1>{FormTitles[page]}</h1>
          <p>Page {page + 1} of {FormTitles.length}</p>
        </div>
        <div className="multistep-body">{PageDisplay()}</div>
        <div className="multistep-footer">


          <button className="claim-prev-btn"
            disabled={page === 0}

            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}

          >
            Prev
          </button>

          <button className="form-next-btn"
            onClick={() => {

              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EvidenceForm;
