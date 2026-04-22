import React, { Children } from 'react';
import TimelineContext from './TimelineContext';

const TimelineProvider = ({Children}) => {
    const [timeline,setTimeline]=([]);
    const data={
        timeline,
        setTimeline
    }
    return (
        <div>
            <TimelineContext.Provider value={data}>{Children}</TimelineContext.Provider>
        </div>
    );
};

export default TimelineProvider;