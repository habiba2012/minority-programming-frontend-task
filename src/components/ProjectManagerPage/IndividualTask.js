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

const IndividualTask = () => {
    return (
        <div>
            {ViewData.map(view => {
                return (
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="card-background">
                                <div class="card-body " style={{ marginLeft: "-15px" }}>

                                    <div className="d-flex" style={{ width: "140px", height: "52px", marginTop: "-12px" }}>
                                        <p class="card-text"
                                            style={{ fontSize: "12px" }}> {view.description}</p>
                                        <p><img src={ManagerAvatar} alt="" style={{ width: "23px", height: "23px" }} /></p>
                                    </div>
                                    <div className="d-flex justify-content-between mt-2">
                                        <p ><img src={yellowFlag} alt="" /></p>
                                        <p className="" style={{ fontSize: "10px" }}> {view.date}</p>
                                    </div>
                                    <div className="d-flex justify-content-between" style={{ marginTop: "-10px", width: "5px" }}>
                                        <p style={{ marginRight: "14px" }}><img src={design} alt="" /></p>
                                        <p ><img src={more} alt="" /></p>
                                    </div>
                                    <p ><img src={develop} alt="" /></p>
                                </div>
                            </div>
                        </div>

                    </div>
                )
            })}

        </div>
    );
};

export default IndividualTask;