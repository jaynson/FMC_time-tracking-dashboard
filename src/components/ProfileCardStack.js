import React, { useState } from 'react';

const ProfileCardStack = ({ timeframeSelect }) => {

    const [active, setActive] = useState(1);

    const handleClick = (e) => {
        e.preventDefault();
        const textStr = e.target.innerText.toLowerCase();
        console.log(textStr);
        (textStr === 'daily') && setActive(0);
        (textStr === 'weekly') && setActive(1);
        (textStr === 'monthly') && setActive(2);
        timeframeSelect(textStr);

    };


    return (
        <article className='profile-card-stack'>
            <div className='profile-card-stack--above card'>
                <div className="profile">
                    <header className='profile__header'>
                        <img className='profile__photo' src='./images/image-jeremy.png' />
                    </header>
                    <main className='profile__main'>
                        <p className='profile__text'>Report for</p>
                        <h1 className='profile__name'>Jeremy Robson</h1>
                    </main>
                </div>
            </div>
            <div className='profile-card-stack--below card'>
                <div className='timelines'>
                    <ul className='timelines__list'>
                        <li className='timelines__item' onClick={ handleClick }>
                            <a href='#' className={ (active === 0) ? 'active' : '' }>Daily</a>
                        </li>
                        <li className='timelines__item' onClick={ handleClick }>
                            <a href='#' className={ (active === 1) ? 'active' : '' }>Weekly</a>
                        </li>
                        <li className='timelines__item' onClick={ handleClick }>
                            <a href='#' className={ (active === 2) ? 'active' : '' }>Monthly</a>
                        </li>
                    </ul>
                </div>
            </div>

        </article>
    );
};

export default ProfileCardStack;
