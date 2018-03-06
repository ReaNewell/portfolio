import React from 'react';

class Project extends React.Component {
    
    render() {
        return (
            <div className='homepage-project'>
                <img src={this.props.imagelocation} alt="filler image"/> <br/>
                <a href={this.props.address} target="_blank">{this.props.name}</a>
                <p>{this.props.description}</p>
            </div>
        );
    }
};

export default Project;