import React from 'react';

const About = () => (
    <section className='about' id='about'>
        <h2 className='subtitle'>About Me</h2>
        <div className="about-box">
        <img src="img/reanewell.jpg" alt=""/>
            <p>
                Hello! My name is Rea Newell. I am a Front End Web Developer based in Panama City, Florida. 
                My goal is to build websites and web applications that draw in and compel their users. 
                I have worked on building my skills in development for the past two years. 
                I am familiar with <span>HTML</span>, <span>CSS</span>, and <span>JavaScript</span>. 
                My primary framework is <span>ReactJS</span>, and I enjoy using other materials like <span>Webpack</span> and <span>Redux</span>.
                <br/>
                In my own time, I enjoy spending time with my husband and pets. 
                During the day, I like to get moving with my dogs on long walks. 
                When I get back indoors my time revolves around studying new subjects and exploring the world of code. 
                I am a team player who does everything in his power to keep his peers from falling behind.
            </p>
        </div>
    </section>
);

export default About;