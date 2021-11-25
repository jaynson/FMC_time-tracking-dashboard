import React from 'react';

const ActivityCardStack = ({ iconName, title, time, prev, timeframe }) => {

    return (
        <article className='activity-card-stack'>
            <div className='activity-card-stack--below card'>
                <svg className='activity__icon' >
                    <use xlinkHref={ `sprite.svg#icon-${iconName}` }></use>
                </svg>
            </div>
            <div className='activity-card-stack--above card'>
                <div className='activity-content'>
                    <header className='activity-content__header'>
                        <h2 className='activity-content__title'>{ title }</h2>
                        <svg className='activity__ellipsis' >
                            <use xlinkHref={ `sprite.svg#icon-ellipsis` }></use>
                        </svg>
                    </header>
                    <main className='activity-content__main'>
                        <p className='activity-content__time'>{ `${time}${(time === '0') ? '' : ((time === '1') ? 'hr' : 'hrs')}` }</p>
                    </main>
                    <footer className='activity-content__footer'>
                        <p className='activity-content__time--previous'>
                            { `${(timeframe === 'daily') ? 'Yesterday' :
                                ((timeframe === 'weekly') ? 'Last Week' : 'Last Month')} -
                                ${prev}${(prev === '0') ? '' : ((prev === '1') ? 'hr' : 'hrs')}`
                            }
                        </p>
                    </footer>
                </div>
            </div>
        </article>
    );
};

export default ActivityCardStack;

{/* <svg>
                    <use xlinkHref={`sprite.svg#icon-${icon}`}></use>
                </svg> */}