
import React, { Component } from 'react';
import Navitem from './Navitem';
import Skills from '../contents/Skills';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive': ''
        }
    }
    activeitem = (x) => {
        if (this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({ 'NavItemActive': x }, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    render() {
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            <li className="hoverable"><Navitem item="Home" tolink="/" activec={this.activeitem}></Navitem></li>
                            <li className="hoverable"><Navitem item="About" tolink="/about" activec={this.activeitem}></Navitem></li>
                            <li className="hoverable"><Navitem item="Education" tolink="/education" activec={this.activeitem}></Navitem></li>
                            <li className="hoverable"><Navitem item="Skills" tolink="/skills" activec={this.activeitem}></Navitem></li>
                            <li className="hoverable"><Navitem item="Contact" tolink="/contact" activec={this.activeitem}></Navitem></li>
                        </ul>
                    </div>
                </nav>
                <div id="what-the-hell-is-this">
                    <div className="page-title">
                        {/* <h2>Simple Navigation</h2> */}
                        {/* <p className="lead">
                            Based on Hover.css, the goal of this pen
                            is to create a simple navigation bar <br />
                            that can be easily reused in both mobile and native displays. Mouse over the nav text for animation!
                        </p> */}
                    </div>
                </div>
            </div>
        )
    }
}
export default Navbar;


       