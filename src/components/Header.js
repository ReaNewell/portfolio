import React from 'react';

class Header extends React.Component {
    render () {
        return (
            <div className='header'>
                <div>
                    <h1 className='header__title'>Rea Newell</h1>
                    <h2 className='header__subtitle'>Web Designer</h2>
                    <div className='header-navigation'>
                        <a className="header-navigation__link" href="/#projects">Projects</a>
                        <a className="header-navigation__link" href="/#about">About</a>
                        <a className="header-navigation__link" href="/#contact">Contact</a>
                    </div>
                </div>
            </div>
        );
    };
}

export default Header;

// <div className='homepage-header-buttons'>
//     <button>Projects</button>
//     <button>About</button>
//     <button>Contact</button>
// </div>