import React from 'react';

class DesignBoard extends React.Component {
    render() {
        return (
            <div className='design-container'>
                <section className='designs' id='designs'>
                    <div className="subtitle--right">
                        <h2 className='subtitle'>Designs</h2>
                    </div>
                    <div className="design-board">
                        <img src="img/grooming-desktop.png" alt="" className="design__web"/>
                        <img src="img/grooming-mobile.png" alt="" className="design__mobile"/>
                        <img src="img/makeup-desktop.png" alt="" className="design__web"/>
                        <img src="img/makeup-mobile.png" alt="" className="design__mobile"/>
                        <img src="img/library-desktop.png" alt="" className="design__web"/>
                        <img src="img/library-mobile.png" alt="" className="design__mobile"/>
                    </div>
                </section>
            </div>
        )
    }
}

export default DesignBoard;