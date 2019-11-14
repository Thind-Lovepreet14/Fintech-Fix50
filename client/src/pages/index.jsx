import React from 'react';

import AppNav from '../components/core/AppNav';
import VidHero from '../components/feature/VidHero';
import Values from '../components/feature/Values';
import Program from '../components/feature/Program';
import AppFooter from '../components/core/AppFooter';

class Index extends React.Component {

    componentDidMount() {
        document.title = 'Home | LifeSports'
    }

    render () {
        return (
            <>
                <AppNav 
                    link_one="Home"
                    link_two="Our Sports"
                    link_three="Profile"

                />
                <VidHero />
                <Values />
                <Program />
                <AppFooter />
            </>
        )
    }
}
export default Index;