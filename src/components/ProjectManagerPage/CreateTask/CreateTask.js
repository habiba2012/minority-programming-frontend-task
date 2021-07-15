import React from 'react';
import createTaskData from '../../../Data/createTaskData.json';
import NavBar from '../../NavBar/NavBar';
import './CreateTask.css'

import userAvatar from '../../../assets/images/manager-avatar.png';
import arrow from '../../../assets/images/arrow.png';

const CreateTask = () => {
    return (
        <div className="container-create-task">

            {createTaskData.map(task => {
                return (
                    <div >

                        <div className="create-background d-flex text-center justify-content-center">
                            <div className="create-task ">
                                <h3 className="d-flex justify-content-between" style={{ color: "#151371", fontsize: "28px" }}>{task.title}</h3>
                                <div className="d-flex justify-content-start" style={{ color: "#282828", fontSize: "16px" }}>
                                    <p ><span className="font-weight-bold">Type:</span> {task.type}</p>{" "}
                                    <p ><span className="font-weight-bold ml-4">Category:</span> {task.category}</p>

                                </div>
                                <hr />
                                <div className="user-info d-flex justify-content-between ">
                                    <div className="col-md-6 d-flex justify-content-start ml-2">
                                        <p className=" mr-2"><img src={userAvatar} alt="" /></p>
                                        <p style={{ color: " #00000066", fontSize: "13px" }}>Created by
                                            <br /> <span style={{ fontWeight: "bold", color: "#282828" }}>Username</span></p>
                                        <p style={{ color: " #00000066", fontSize: "13px" }}>Created on
                                            <br /> <span style={{ fontWeight: "bold", color: "#282828" }}>March 25</span></p>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-end">
                                        <p style={{ color: " #282828", fontSize: "20px" }}>58
                                            <br /> <span style={{ fontWeight: "bold", color: "#000", fontSize: "14px" }}>Username</span></p>
                                        <p style={{ color: " #282828", fontSize: "20px" }}>74
                                            <br /> <span style={{ fontWeight: "bold", color: "#000", fontSize: "14px" }}>Views</span></p>
                                        <img src={arrow} alt="" style={{ width: "40px", marginLeft: "5px" }} />
                                    </div>
                                </div>
                                <hr />
                                <div className="col-xs-12 col-md-6 col-sm-8 col-lg-8  ">
                                    <p className="text-justify ">{task.description}</p>
                                    <div className="pull-right">
                                        <button className="create-button">{task.buttonText}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    );
};

export default CreateTask;