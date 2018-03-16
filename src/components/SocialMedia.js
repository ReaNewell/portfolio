import React from 'react';

const SocialMedia = () => (
    <div className='main-container socialmedia' id='contact'>
        <p className="socialmedia-body">Check out some of my designs and progression of other projects on my social media.</p>
        <div className='socialmedia-container'>
            <a href="http://www.twitter.com/reanewell"><img className="socialmedia__image" src="/img/twitter.png" /></a>
            <a href="http://www.instagram.com/reanewellwebdev"><img className="socialmedia__image" src="/img/instagram.jpg"/></a>
            <a href="http://www.github.com/reanewell"><img className="socialmedia__image" src="/img/github.png"/></a>
            <a href="http://www.codepen.io/reanewell"><img className="socialmedia__image" src="/img/codepen.png"/></a>
        </div>
    </div>
);

export default SocialMedia;