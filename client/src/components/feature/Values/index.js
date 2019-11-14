import React from 'react';
import './_Values.scss';

import CardLayout from '../../layout/CardLayout';

import { faBook,faHandHoldingHeart, faBaseballBall } from "@fortawesome/free-solid-svg-icons";

const Values = () => {
    return (
        <>
            <h3 className="values__title">Our Core Values</h3>
            <section className="values">
                <CardLayout 
                    icon={faBook}
                    title="Education" 
                    content="LifeSports is founded upon the power of education and the opportunities made possible through support for learning. We create resources that empower."
                />

                <CardLayout 
                    icon={faHandHoldingHeart}
                    title="Respect" 
                    content="Coaching at LifeSports extends beyond the court or the field. Each day is dedicated to fostering an environment of respect and setting expectations for greatness."
                />

                <CardLayout 
                    icon={faBaseballBall}
                    title="Sport" 
                    content="We set out each day to grow stronger as a team. Contribution, cooperation, and hard work towards a common goal make team sports the foundation of who we are."
                />
            </section>
        </>
    )
}

export default Values;