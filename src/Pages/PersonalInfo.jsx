import React from 'react'

function PersonalInfo({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <p>Who is your claim with ?</p>
      <select onChange={(e) => {
        setFormData({ ...formData, firstName: e.target.value });
      }} name="cars" id="cars">
        <option value={formData.firstName}> council</option>
        <option value={formData.firstName}>energy provider</option>
        <option value={formData.firstName}>student loans</option>
        <option value={formData.firstName}>other</option>

      </select>

    </div>
  )
}

export default PersonalInfo