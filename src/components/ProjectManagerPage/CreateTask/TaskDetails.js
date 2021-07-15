import React from 'react';
import * as AiIcons from 'react-icons/ai';
import AdIcon from '../../../assets/images/Vectoradd.png';
import groupIcon from '../../../assets/images/icon.png'
import UserAddIcon from '../../../assets/images/user-add.png'

const TaskDetails = () => {
    return (
        <div className="d-flex text-center justify-content-center">
            <div className="task-details ">
                <h3 className="d-flex justify-content-start text-uppercase mt-4">Type task name here</h3>
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-start">
                        <img src={groupIcon} alt="" />
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <AiIcons.AiOutlineSearch style={{ position: "absolute", marginRight: "240px", marginTop: "9px" }} /><span>In</span>
                        <input type="text" className="form-control-sm " placeholder="     search List"
                            style={{ borderRadius: "15px" }} />
                        <span className="mr-2">For</span><img src={UserAddIcon} alt=""
                            style={{ width: "40px", height: "40px", marginRight: "10px" }} />
                    </div>
                </div>
                <form className=" form-group ">
                    <div className="task-area " >
                        <textarea className="form-control-sm mt-5"
                            placeholder="Type task description here" style={{ width: "1040px", height: "224px", }} />
                        <br />
                        <div className="row">
                            <div className="col-md-6 d-flex justify-content-start ml-5 ">
                                <img src={AdIcon} alt="" /> <span>Add Subtask</span>
                            </div>
                            <div className="col-md-6  d-flex justify-content-end  ">

                                <p style={{ marginTop: "-25px", marginRight: "-500px" }}><span>Add Definition of done Checklist</span>
                                    <img src={AdIcon} alt="" /></p>
                            </div>
                        </div>

                        <br />
                        <input type="file" className="form-control-file ml-5" placeholder="Add attachment" />
                    </div>
                    <br />


                </form>
                <button className=""
                    style={{
                        backgroundColor: "#151371",
                        width: "180px", height: "48px", color: "white", marginTop: "50px", marginRight: "-790px"
                    }}>Create Task</button>
            </div>

        </div>
    );
};

export default TaskDetails;