import React from 'react'

function ClaimInfo({ formData, setFormData }) {
  return (
    <div className="claim-info-container">
    <input
      type="text"
      placeholder="Message..."
      value={formData.message}
      onChange={(e) => {
        setFormData({ ...formData, nationality: e.target.value });
      }}/>
    </div>
  )
}

export default ClaimInfo