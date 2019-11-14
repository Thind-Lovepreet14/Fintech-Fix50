import React from 'react';
import './_CardLayout.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardLayout = (props) => {
    return (
        <>
            <div className="card">
                <FontAwesomeIcon className="card__icon" icon={props.icon} />
                <h3 className="card__title">{props.title}</h3>
                <p className="card__content">{props.content}</p>
            </div>
        </>
    )
}

export default CardLayout;