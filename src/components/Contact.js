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
                        <img src="img/twitter.png" alt=""/>
                        <img src="img/instagram.png" alt=""/>
                        <img src="img/github.png" alt=""/>
                        <img src="img/codepen.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default Contact;