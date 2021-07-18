import React from 'react';
import ManagerPageBanner from './ManagerPageBanner';
import ManagerFeaturedTask from './ManagerFeaturedTask';
import PlannedTask from './PlannedTasks'

const ProjectManagerViewTask = () => {
    return (
        <div className="container-fluid">

            <ManagerPageBanner />
            <PlannedTask />

        </div>
    );
};

export default ProjectManagerViewTask;