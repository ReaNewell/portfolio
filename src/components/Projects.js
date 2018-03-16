import React from 'react';
import Project from './Project';

class Projects extends React.Component {
    constructor(props) {
        super(props),

        this.state = {
            extraProjectsShown: false           
        }
    }
    showMoreProjects = () => {
        this.setState(() => ({ extraProjectsShown: true }));
    }
    showLessProjects = () => {
        this.setState(() => ({ extraProjectsShown: false }));
    }
    render() {
        return (
            <div className='projects main-container' id='projects'>
                <h2 className="subtitle">Projects</h2>
                <div className='project-container'>
                    <Project
                        imagelocation="/img/raffl.png" 
                        name="raffl"
                        address="https://reanewell.github.io/raffl/"
                        description="Create a list of entries and randomly select one entry from the list."
                        repository="https://github.com/ReaNewell/raffl"
                        skills="HTML CSS JavaScript"
                    />
                    <Project 
                        imagelocation="/img/word-counter.png"
                        name="Word Counter"
                        address="https://reanewell.github.io/word-counter/"
                        description="Type in the text area to get a count of how many words and sentences that have been entered."
                        repository="https://github.com/ReaNewell/word-counter"
                        skills="HTML CSS JavaScript"
                    />
                    <Project 
                        imagelocation="/img/pet-gallery.jpg"
                        name="Pet Gallery"
                        address="https://reanewell.github.io/pet-gallery/"
                        description="Pet photography webpage displaying two separte galleries."
                        repository="https://github.com/ReaNewell/pet-gallery"
                        skills="HTML CSS JavaScript"
                    />
                    {this.state.extraProjectsShown && 
                        <div className='homepage-project-container'>
                            <Project 
                            imagelocation="/img/listlist.png"
                            name="ListList"
                            address="https://listlist-bd2a3.firebaseapp.com/"
                            description="Simple list application made with React."
                            repository="https://github.com/ReaNewell/listlist"
                            skills="HTML CSS JavaScript React"
                            />
                        </div>
                    } 
                </div>
                { this.state.extraProjectsShown ? <button onClick={this.showLessProjects} className="project-button">Show Less</button> : <button onClick={this.showMoreProjects} className="project-button">Show More</button> }
            </div>
        )
    }   
}
;

export default Projects;