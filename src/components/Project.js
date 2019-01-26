import React from 'react';

class Project extends React.Component {
    constructor(props) {
        super(props),

        this.state = {
            infoExtended: false
        }
    }
    changeDisplay = () => {
        if (this.state.infoExtended) {
            this.retractInfo();
        } else {
            this.extendInfo();
        }
    }
    extendInfo = () => {
        this.setState(() => ({ infoExtended: true }));
        console.log("Extend");
    }
    retractInfo = () => {
        this.setState(() => ({ infoExtended: false }));
    }
    render() {
        return (
            <div className='project' onClick={this.changeDisplay}>
                <img className="project-image" src={this.props.imagelocation} alt={"photo from " + this.props.name}/> <br/>
                <h3 className="project-name">{this.props.name}</h3>
                <p className="project__description">{this.props.description}</p>
                {this.state.infoExtended && <a className="project__link" href={this.props.address} target="_blank">Project Website</a>}
                {this.state.infoExtended && <a className="project__link" href={this.props.repository} target="_blank">Github Repository</a>}
                {this.state.infoExtended && <p className="project__description">Skills: {this.props.skills}</p>}
            </div>
        );
    }
};

export default Project;