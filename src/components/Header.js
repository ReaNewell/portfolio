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
            <header className='header'>
                <div className='header__top'>
                    <svg className='header__top__image' version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="720" height="648" viewBox="0, 0, 720, 648">
                        <defs>
                            <linearGradient id="Gradient_1" gradientUnits="userSpaceOnUse" x1="247.038" y1="1.233" x2="294.211" y2="646.767">
                            <stop offset="0" stopColor="#95FFC1"/>
                            <stop offset="1" stopColor="#4BCCFF"/>
                            </linearGradient>
                            <linearGradient id="Gradient_2" gradientUnits="userSpaceOnUse" x1="600.057" y1="4.757" x2="661.193" y2="152.988">
                            <stop offset="0" stopColor="#4BCCFF"/>
                            <stop offset="1" stopColor="#95FFC1"/>
                            </linearGradient>
                            <linearGradient id="Gradient_3" gradientUnits="userSpaceOnUse" x1="592.853" y1="640.344" x2="668.396" y2="492.237">
                            <stop offset="0" stopColor="#95FFC1"/>
                            <stop offset="1" stopColor="#4BCCFF"/>
                            </linearGradient>
                            <linearGradient id="Gradient_4" gradientUnits="userSpaceOnUse" x1="587.093" y1="252.813" x2="690.932" y2="390.487">
                            <stop offset="0" stopColor="#4BCCFF"/>
                            <stop offset="1" stopColor="#95FFC1"/>
                            </linearGradient>
                        </defs>
                        <g id="Layer_1">
                            <path d="M0,321.163 L541.25,0 L541.25,648 L0,321.163 z" fill="url(#Gradient_1)"/>
                            <path d="M541.25,0 L720,157.744 L541.25,157.744 L541.25,0 z" fill="url(#Gradient_2)"/>
                            <path d="M720,484.581 L541.25,484.581 L541.25,648 L720,484.581 z" fill="url(#Gradient_3)"/>
                            <path d="M565.587,224.3 L633.237,224.3 Q646.987,224.3 659.912,227.188 Q672.837,230.075 682.875,236.675 Q692.912,243.275 698.962,254 Q705.012,264.725 705.012,280.125 Q705.012,301.3 693.05,314.638 Q681.087,327.975 660.462,332.65 L712.437,419 L670.637,419 L625.537,336.5 L600.237,336.5 L600.237,419 L565.587,419 z M628.562,308.175 Q635.987,308.175 643.412,307.075 Q650.837,305.975 656.75,302.95 Q662.662,299.925 666.512,294.288 Q670.362,288.65 670.362,279.85 Q670.362,271.875 666.787,266.788 Q663.212,261.7 657.712,258.675 Q652.212,255.65 645.2,254.55 Q638.187,253.45 631.587,253.45 L600.237,253.45 L600.237,308.175 z" fill="url(#Gradient_4)"/>
                        </g>
                    </svg>
                    <h1 className='header__top__title'>
                        Hi, I'm Rea Newell. <br/>
                        Front End Web Developer
                    </h1> 
                </div>
                <nav className='navigation'>
                    <ul className='navigation__links'>
                        <a className="navigation__link" aria-label="scroll to Projects" onClick={this.scrollToProjects} href="#">Projects</a>
                        <a className="navigation__link" aria-label="scroll to Design Dashboard" onClick={this.scrollToContact} href="#">Design Dashboard</a>
                        <a className="navigation__link" aria-label="scroll to About Me" onClick={this.scrollToAbout} href="#">About Me</a>
                        <a className="navigation__link" aria-label="scroll to Get in Touch" onClick={this.scrollToContact} href="#">Get In Touch</a>
                        <a className='navigation__link' href='https://blog.reanewell.com' target='_blank'>Blog</a>
                    </ul>
                </nav>
        </header>
        );
    };
}

export default Header;