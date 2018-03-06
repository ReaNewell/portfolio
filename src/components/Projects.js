import React from 'react';
import Project from './Project';

const Projects = () => (
    <div className='homepage-projects main-container'>
        <h2>Projects</h2>
        <div className='homepage-project-container'>
            <Project
                imagelocation="/img/listlist.png" 
                name="ListList"
                address="/listlist"
                description="Make a list of items with this simple React application."
            />
            <Project 
                imagelocation="/img/word-counter.png"
                name="Word Counter"
                address="https://reanewell.github.io/word-counter/"
                description="Type in the text area to get a count of how many words and sentences that have been entered."
            />
            <Project 
                imagelocation="/img/pet-gallery.jpg"
                name="Pet Gallery"
                address="https://reanewell.github.io/pet-gallery/"
                description="Pet photography webpage displaying two separte galleries."
            />
        </div>
    </div>
);

export default Projects;