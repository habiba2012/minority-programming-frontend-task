import React from 'react';
import '../components/ProjectManagerPage/CreateTask/CreateTask.css'
import CreateTask from '../components/ProjectManagerPage/CreateTask/CreateTask';
import TaskDetails from '../components/ProjectManagerPage/CreateTask/TaskDetails';
import ProposalStatus from '../components/ProjectManagerPage/CreateTask/ProposalStatus';

const ProjectManagerCreateTask = () => {
    return (
        <div className="container-fluid" >
            <CreateTask />
            <TaskDetails />
            <ProposalStatus />
        </div>
    );
};

export default ProjectManagerCreateTask;