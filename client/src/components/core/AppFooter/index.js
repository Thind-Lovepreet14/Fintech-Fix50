import React from 'react';
import './_AppFooter.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

library.add(fab);

const AppFooter = () => {
    return (
    
    <> 
        <footer className="footer">
            <h2 className="footer__heading">Stay Connected</h2>

            <div className="footer__socials">
                <a className="footer__socials__icon" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/lifesports_clt/"><FontAwesomeIcon className="footer__socials__icon--size" icon={['fab' , 'instagram']} /><span className="footer__socials__label">Instagram</span></a>
                <a className="footer__socials__icon divider" rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/LifeHoops/"><FontAwesomeIcon className="footer__socials__icon--size" icon={['fab' , 'facebook-square']} /><span className="footer__socials__label">Facebook</span></a>
                <a className="footer__socials__icon" rel="noopener noreferrer" target="_blank" href="https://twitter.com/LifeHoopsCLT"><FontAwesomeIcon className="footer__socials__icon--size" icon={['fab' , 'twitter-square']} /><span className="footer__socials__label">Twitter</span></a>
            </div>

            <nav className="footer__nav">
                <div className="footer__info">
                    <a className="footer__info__icon" href="/"><FontAwesomeIcon className="footer__info__icon--size" icon={faPhoneAlt} /><span className="footer__info__label">(704) 971-2300</span></a>
                    <a className="footer__info__icon footer__info__icon--divider"rel=" noopener noreferrer" target="_blank" href="https://www.google.com/gmail/"><FontAwesomeIcon className="footer__info__icon--size" icon={faEnvelope} /><span className="footer__info__label">information@lifesports.org</span></a>
                    <a className="footer__info__icon" rel="noopener noreferrer" target="_blank" href="https://www.google.com/maps/place/1101+Red+Ventures+Dr,+Fort+Mill,+SC+29707/@35.0061496,-80.8482223,17z/data=!3m1!4b1!4m5!3m4!1s0x885682fbd9d07a95:0x1e3e1252089aec6f!8m2!3d35.0061496!4d-80.8460336"><FontAwesomeIcon className="footer__info__icon--size" icon={faMapMarkerAlt} /><span className="footer__info__label">1101 Red Ventures Dr, Fort Mill, SC 29707</span></a>
                </div>
            </nav>

            <div className="copyright">
                <p className="copyright__text">Copyright &copy; 2019 LifeSports.org</p>
            </div>
        </footer>
    </>

    )
}

export default AppFooter;