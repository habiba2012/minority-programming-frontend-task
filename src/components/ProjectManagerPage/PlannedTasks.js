import React, { useEffect, useState } from 'react';
import ViewData from '../../Data/managerView.json'
import PlannedTaskHeader from '../../assets/images/planned-task.png'
import ManagerAvatar from '../../assets/images/manager-avatar.png'
import yellowFlag from '../../assets/images/yellow-flag.png'
import design from '../../assets/images/design.png'
import develop from '../../assets/images/develop.png'
import more from '../../assets/images/more-option.png'
import tick from '../../assets/images/Vectortick.png'
import taskHeaderImg from '../../assets/images/Vectortick.png'
import ManagerFeaturedTask from './ManagerFeaturedTask';
import IndividualTask from './IndividualTask';


const PlannedTasks = () => {

    return (
        <div className="" style={{}}>
            <div className="d-flex justify-content-around Container-fluid col-sm-12">
                {ViewData.map(view => {
                    return (
                        <div className="">
                            <div className=" row">
                                <div className="  col-md-12 task-background ">
                                    <div className="">
                                        <div className="" >
                                            <div className="d-flex p-2  text-center header-img"
                                                style={{ justifyContent: 'center', fontWeight: "bold", fontSize: "24px" }}>

                                                <p><img src={tick} alt="task header" /></p>
                                                <p>{view.title}</p>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mr-3 ">

                                            <div className="col-md-6 ">
                                                <div className="card-background">
                                                    <IndividualTask />
                                                </div>
                                            </div>
                                            <div className="col-md-6 ml-2">
                                                <div className="card-background">
                                                    <IndividualTask />
                                                </div>
                                            </div>




                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    );
};

export default PlannedTasks;