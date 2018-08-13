import React from 'react';
import SocialMedia from './SocialMedia';

const Contact = () => (
    <div className='contact'>
        <div className='main-container'>
            <h2 className='subtitle'>Contact</h2>
            <div>
                <p className="contact-body">Get into contact with me through email: <span className="contact-body--email">patrick.r.newell@gmail.com</span></p>
            </div>
            <SocialMedia />
        </div>
    </div>
);

export default Contact;