import React from 'react';

class Header extends React.Component {
    scrollToProjects = () => {
        document.getElementById('projects').scrollIntoView({
            alignTo: false,
            behavior: 'smooth'
        })
    }
    scrollToAbout = () => {
        document.getElementById('about').scrollIntoView({
            alignTo: false,
            behavior: 'smooth'
        })
    }
    scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({
            alignTo: false,
            behavior: 'smooth'
        })
    }
    render () {
        return (
            <div className='header'>
                <div>
                    <h1 className='header__title'>Rea Newell</h1>
                    <h2 className='header__subtitle'>Front-End Web Developer</h2>
                    <div className='header-navigation'>
                        <a className="header-navigation__link" aria-label="scroll to Projects section" onClick={this.scrollToProjects} href="#">Projects</a>
                        <a className="header-navigation__link" aria-label="scroll to About section" onClick={this.scrollToAbout} href="#">About</a>
                        <a className="header-navigation__link" aria-label="scroll to Contact Me section" onClick={this.scrollToContact} href="#">Contact</a>
                        <a className='header-navigation__link' href='https://blog.reanewell.com' target='_blank'>Blog</a>
                    </div>
                </div>
            </div>
        );
    };
}

export default Header;