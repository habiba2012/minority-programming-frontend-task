import React from 'react';
import ManagerPageBanner from './ManagerPageBanner';
import ManagerFeaturedTask from './ManagerFeaturedTask';
import PlannedTask from './PlannedTasks'

const ProjectManagerViewTask = () => {
    return (
        <div className="">

            <ManagerPageBanner />
            <PlannedTask />

        </div>
    );
};

export default ProjectManagerViewTask;