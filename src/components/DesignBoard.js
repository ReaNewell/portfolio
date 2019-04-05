import React from 'react';

class DesignBoard extends React.Component {
    handleActivateImage = (event) => {
        const activeImage = event.target;

        if (activeImage.classList.contains("design__image--active")) {
            activeImage.classList.remove("design__image--active");
        } else {
            const designBoardImages = document.querySelectorAll('.design__image');

            designBoardImages.forEach( design => design.classList.remove("design__image--active"));
            activeImage.classList.add("design__image--active");
        }
        // document.getElementById('designs').scrollIntoView();
    }

    render() {
        return (
            <div className='design-container'>
                <section className='designs' id='designs'>
                    <div className="subtitle--right">
                        <h2 className='subtitle'>Designs</h2>
                    </div>
                    <div className="design-board">
                        <img onClick={this.handleActivateImage} src="img/grooming-desktop.png" alt="" className="design__image"/>
                        <img onClick={this.handleActivateImage} src="img/grooming-mobile.png" alt="" className="design__image"/>
                        <img onClick={this.handleActivateImage} src="img/makeup-desktop.png" alt="" className="design__image"/>
                        <img onClick={this.handleActivateImage} src="img/makeup-mobile.png" alt="" className="design__image"/>
                        <img onClick={this.handleActivateImage} src="img/library-desktop.png" alt="" className="design__image"/>
                        <img onClick={this.handleActivateImage} src="img/library-mobile.png" alt="" className="design__image"/>
                    </div>
                </section>
            </div>
        )
    }
}

export default DesignBoard;