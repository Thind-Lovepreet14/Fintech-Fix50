import React from 'react';

import AppNav from '../components/core/AppNav';
import AppFooter from '../components/core/AppFooter';
import OurSports from '../components/feature/PlayerProfile';

class Profile extends React.Component {

    componentDidMount() {
        document.title = 'Profile | LifeSports'
    }

    render () {
        return (
            <>
                <AppNav 
                    link_one="Home"
                    link_two="Our Sports"
                    link_three="Profile"
                />
                <OurSports />
                <AppFooter />
            </>
        )
    }
}
export default Profile;