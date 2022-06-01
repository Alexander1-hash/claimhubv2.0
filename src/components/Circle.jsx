import React from "react";
import "../stylesheet/circle.css"

function Circle({ number }) {

    return (
        <div className="circle">
            <div className="number">{number}.</div>
        </div>
    )

}

export default Circle;
