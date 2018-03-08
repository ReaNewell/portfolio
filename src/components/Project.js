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
            <div className='homepage-project' onClick={this.changeDisplay}>
                <img src={this.props.imagelocation} alt="filler image"/> <br/>
                <h3>{this.props.name}</h3>
                <p>{this.props.description}</p>
                {this.state.infoExtended && <a href={this.props.address} target="_blank">Project Website</a>}
                {this.state.infoExtended && <a href={this.props.repository} target="_blank"><p>Github Repository</p></a>}
                {this.state.infoExtended && <p>Skills: {this.props.skills}</p>}
            </div>
        );
    }
};

export default Project;