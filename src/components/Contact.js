import React from 'react';

const Contact = () => (
    <div className='contact-container'>
        <section className='contact' id='contact'>
            <div className="subtitle--right">
                <h2 className='subtitle'>Get in Touch</h2>
            </div>
            <div>
                <p className='contact-email'>
                    Get into contact with me through email: <a href="mailto:patrick.r.newell@gmail.com">patrick.r.newell@gmail.com</a>
                </p>
                <div className="contact-right">
                    <p>
                        Check out some of my designs and progression of other projects on my social media.
                    </p>
                    <div className="social-icons">
                        <a href='https://twitter.com/reanewell' target='_blank'><img className="social-icons__twitter" src="img/icon-twitter.svg" alt=""/></a>
                        <a href='https://www.instagram.com/rea.webdev' target='_blank'><img className="social-icons__instagram" src="img/icon-instagram.svg" alt=""/></a>
                        <a href='https://github.com/ReaNewell' target='_blank'><img className="social-icons__github" src="img/icon-github.svg" alt=""/></a>
                        <a href='https://codepen.io/reanewell' target='_blank'><img className="social-icons__codepen" src="img/icon-codepen.svg" alt=""/></a>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default Contact;