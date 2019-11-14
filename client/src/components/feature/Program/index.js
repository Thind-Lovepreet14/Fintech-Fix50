import React from 'react';
import './_Program.scss';

const Program = () => {
    return (
        <>
        <section className="info--bg"> 
            <div className="info">
            <div className="info--wrapper">
                <div className="info__content">
                    <img className="info__content__logo" alt="Life Hoops Logo" src="/images/lifekicks.png"></img>
                    <h3 className="info__content__title">Founded in March of 2017</h3>
                    <p className="info__content__text">LifeHoops is a Charlotte-based 501(c)(3) nonprofit that combines basketball, mentorship, and academics to empower young men as leaders in their communities. In partnership with the Charlotte YMCA, it seeks to create a safe afterschool environment where participants accelerate their academic achievements, learn what it means to be a part of a team, and enhance their basketball skills under guided coaching.</p>
                </div>
    
                <div className="info__content">
                    <img className="info__content__logo" alt="Life Kicks Logo" src="/images/lifehoops.png"></img>
                    <h3 className="info__content__title">Founded in August of 2018</h3>
                    <p className="info__content__text">LifeKicks was founded in August of 2018 as the second 501(c)(3) nonprofit under the LifeSports umbrella. Like LifeHoops, LifeKicks works alongside the YMCA of Greater Charlotte to offer academic resources and sports-based opportunities for Charlotte-area students in Title I schools. Through mentorship and teambuilding, LifeKicks offers young adults a setting for growth as soccer players and as leaders.</p>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}
export default Program;