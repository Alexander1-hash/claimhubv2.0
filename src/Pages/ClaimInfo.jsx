import React from 'react'
import "../stylesheet/claiminfo.css"

function ClaimInfo({ formData, setFormData }) {
  return (
    <div className="claim-info-container">
      <section className='claim-info-section'>
        <div class="terms-container">
          <div class="terms">
            <h2>If you’re gonna visit…</h2>
            <p>Please agree to these terms. We love our parks and want them to stay awesome for everyone.</p>
            <ul>
              <li>I will clean up after myself.</li>
              <li>I will leave no trace.</li>
              <li>I'll pick up any trash I see.</li>
              <li>I will not destroy the environment.</li>
            </ul>
            <p>See, that wasn’t so difficult! Here are the <em>Leave No Trace Seven Principles</em> by the Center for
              Outdoor Ethics:</p>
            <p>The Seven Principles of Leave No Trace provide an easily understood framework of minimum impact practices
              for anyone visiting the outdoors. Although Leave No Trace has its roots in backcountry settings, the
              Principles have been adapted so that they can be applied anywhere — from remote wilderness areas, to local
              parks and even in your own backyard. They also apply to almost every recreational activity. Each Principle
              covers a specific topic and provides detailed information for minimizing impacts.</p>

            <p>The Seven Principles are well established and widely known, but they are not static. The Leave No Trace
              Center for Outdoor Ethics continually examines, evaluates and reshapes the Principles. The Center’s
              Education Department conducts research — including publishing scholarly articles in independent journals —
              to ensure that the Principles are up to date with the latest insights from biologists, land managers and
              other leaders in outdoor education.</p>
            <p>© 1999 by the Leave No Trace Center for Outdoor Ethics: www.LNT.org.</p>
          </div>
          <div class="btn-container">
            <button class="btn-accept">I agree!</button>
            <div class="btn-message">Please read first before agreeing.</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ClaimInfo