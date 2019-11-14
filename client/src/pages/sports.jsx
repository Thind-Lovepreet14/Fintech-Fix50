import React from 'react';

import AppNav from '../components/core/AppNav';
import AppFooter from '../components/core/AppFooter';
import OurSports from '../components/feature/Sports';

class Sports extends React.Component {

    componentDidMount() {
        document.title = 'Our Sports | LifeSports'
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
export default Sports;