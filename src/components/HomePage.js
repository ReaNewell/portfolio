import React from 'react';
import Header from './Header';
import Projects from './Projects';
import About from './About';
import DesignBoard from './DesignBoard';
import Contact from './Contact';
import Footer from './Footer';

class HomePage extends React.Component {
    render () {
        return (
            <div>
                <Header />
                <Projects />
                <DesignBoard />
                <About />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default HomePage;