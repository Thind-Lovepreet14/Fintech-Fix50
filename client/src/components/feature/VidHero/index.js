import React from 'react';
import './_VidHero.scss';

const VidHero = () => {
    return (
        <section className="vidhero">
            <div className="vidhero__header">
                <h1 className="vidhero__header--title">Leaving it better than we found it</h1>
                <p className="vidhero__header--subtitle">Making a difference in our commuity and changing lives with sports!</p>
                <a className="vidhero__header--button" href="https://vimeo.com/274797471" target="_blank" rel="noopener noreferrer">Click To Watch Video</a>
            </div>
            <video className="vidhero__video" autoPlay={true} loop muted>
                <source src="video/lifesports.mp4" />
            </video>
        </section>
    )
}

export default VidHero;