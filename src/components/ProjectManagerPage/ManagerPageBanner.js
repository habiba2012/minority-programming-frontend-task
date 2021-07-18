import React from 'react';
import './ProjectManagerPage.css'
import taskBannerImg from '../../assets/images/Illustration.png'

const ManagerPageBanner = () => {
    return (
        <div className="tasks-banner">
            <div className="row">
                <div className="col-md-7 pt-5">
                    <h1 className="banner-text text-center">VIEW TASKS</h1>
                    <h4 className="banner-text text-center">View, organize and access your tasks here.</h4>
                </div>
                <div className="col-md-5">
                    <img src={taskBannerImg} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default ManagerPageBanner;