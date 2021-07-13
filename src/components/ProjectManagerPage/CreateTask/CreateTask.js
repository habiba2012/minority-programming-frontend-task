import React from 'react';
import createTaskData from '../../../Data/createTaskData.json';
import NavBar from '../../NavBar/NavBar';
import './CreateTask.css'

const CreateTask = () => {
    return (
        <div>

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
                                    <div className="col-md-6">
                                        <p><img src="{ }" alt="" /></p>
                                    </div>
                                    <div className="col-md-6">

                                    </div>
                                </div>
                                <hr />
                                <div className="col-xs-12 col-md-6 col-sm-8 col-lg-8  ">

                                    <p className="text-justify ">{task.description}</p>
                                    <div className="pull-right">
                                        <button className="">{task.buttonText}</button>
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