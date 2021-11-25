import React, { useState } from 'react';
import ActivityCardStack from './ActivityCardStack';
import ProfileCardStack from './ProfileCardStack';
import data from '../data.json';

const TimeTracker = () => {
    const [activityData, setActivityData] = useState(data);
    // const [activityData, setActivityData] = useState(data);
    const [timeframe, setTimeframe] = useState('weekly');

    console.log(data);
    console.log(activityData);
    // Build array of activitycards to be displayed
    return (
        <div className='component'>
            <div className="content">
                <section className="profile-section">
                    <ProfileCardStack timeframeSelect={ setTimeframe } />
                </section>
                <section className="activities-section">
                    <ActivityCardStack
                        title='Work'
                        time={ `${data[0].timeframes[timeframe].current}` }
                        prev={ `${data[0].timeframes[timeframe].previous}` }
                        iconName='work'
                        timeframe={ timeframe }
                    />
                    <ActivityCardStack
                        title='Play'
                        time={ `${data[1].timeframes[timeframe].current}` }
                        prev={ `${data[1].timeframes[timeframe].previous}` }
                        iconName='play'
                        timeframe={ timeframe }
                    />
                    <ActivityCardStack
                        title='Study'
                        time={ `${data[2].timeframes[timeframe].current}` }
                        prev={ `${data[2].timeframes[timeframe].previous}` }
                        iconName='study'
                        timeframe={ timeframe }
                    />
                    <ActivityCardStack
                        title='Exercise'
                        time={ `${data[3].timeframes[timeframe].current}` }
                        prev={ `${data[3].timeframes[timeframe].previous}` }
                        iconName='exercise'
                        timeframe={ timeframe }
                    />
                    <ActivityCardStack
                        title='Social'
                        time={ `${data[4].timeframes[timeframe].current}` }
                        prev={ `${data[4].timeframes[timeframe].previous}` }
                        iconName='social'
                        timeframe={ timeframe }
                    />
                    <ActivityCardStack
                        title='Self Care'
                        time={ `${data[5].timeframes[timeframe].current}` }
                        prev={ `${data[5].timeframes[timeframe].previous}` }
                        iconName='self-care'
                        timeframe={ timeframe }
                    />
                </section>
            </div>
        </div>
    );
};

export default TimeTracker;
