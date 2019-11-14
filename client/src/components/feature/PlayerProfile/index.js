import React from 'react';
import ProfileVideo from './ProfileVideo';
import PlayerBanner from './PlayerBanner';
import ProfileNav from './ProfileNav';
import GameStats from './GameStats';
import './Profile.css';

const ProfilePage = () => {
    return (
        <>
            <ProfileVideo />
            <ProfileNav />
            <PlayerBanner />
            <GameStats />    
        </>
    )
}

export default ProfilePage;