import React from 'react';

const SocialMedia = () => (
    <div className='main-container socialmedia' id='contact'>
        <p className="socialmedia-body">Check out some of my designs and progression of other projects on my social media.</p>
        <div className='socialmedia-container'>
            <a href="http://www.twitter.com/reanewell" aria-label="Link to Twitter Profile"><img className="socialmedia__image" src="/img/twitter.png" alt='Link to Twitter Profile' aria-hidden="true"/></a>
            <a href="http://www.instagram.com/rea.webdev" aria-label="Link to Instagram Profile"><img className="socialmedia__image socialmedia__image--instagram" src="https://i0.wp.com/nappstarrocks.com/wp-content/uploads/2017/09/Instagram-circle-icon-1.png?ssl=1" alt="Link to Instagram Profile" aria-hidden="true"/></a>
            <a href="http://www.github.com/reanewell" aria-label="Link to GitHub Profile"><img className="socialmedia__image" src="/img/github.png" alt="Link to GitHub Profile" aria-hidden="true"/></a>
            <a href="http://www.codepen.io/reanewell" aria-label="Link to CodePen Profile"><img className="socialmedia__image" src="/img/codepen.png" alt="Link to CodePen Profile" aria-hidden="true"/></a>
        </div>
    </div>
);

export default SocialMedia;