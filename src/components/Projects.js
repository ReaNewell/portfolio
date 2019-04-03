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
            <div className='projects-container'>
                <section className='projects' id='projects'>
                    <h2 className="subtitle">Projects</h2>
                    <div className='project-board'>
                        <Project 
                            imagelocation="/img/pupskills.png"
                            name="Pup Skills"
                            address="https://pupskills.dog"
                            description="Pup Skills is a place for you to keep track of the skills you have been working on with your dog. Record and update the progress you are having with your pups."
                            repository="https://github.com/ReaNewell/pup-skills"
                            skills="HTML CSS JavaScript React Redux Firebase Jest"
                        />
                    </div>
                </section>
            </div>
        )
    }   
}
;

export default Projects;