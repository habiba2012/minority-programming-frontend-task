import React, { useState } from 'react';

const ProposalStatus = () => {
    const [disable, setDisable] = useState(false);

    const handleProposal = () => {
        setDisable(true)
        alert("First click the Create task button.")
    }
    return (
        <div className="d-flex text-center justify-content-center  ">
            <div className="task-status">
                <h3 className="text-uppercase " style={{ color: "#151371", fontSize: "34px" }}>Change status of proposal</h3><br />
                <p style={{ fontSize: "24px" }}>Notify users that the proposal moved to planned stage,<br />
                    once task has been created and assigned.</p>
                <button disabled={disable} onClick={handleProposal} style={{ backgroundColor: " #8685B2", width: "138px", height: "48px", color: "white" }}>Planned</button>
            </div>
        </div>
    );
};

export default ProposalStatus;