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
                        <p className="header-navigation__link" onClick={this.scrollToProjects}>Projects</p>
                        <p className="header-navigation__link" onClick={this.scrollToAbout}>About</p>
                        <p className="header-navigation__link" onClick={this.scrollToContact}>Contact</p>
                    </div>
                </div>
            </div>
        );
    };
}

export default Header;