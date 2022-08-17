import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Bachelor's degree in Information Technology" where="Mumbai University" from="July 2019" to="May 2022"/>
            <Widecard title="HSC" where="R D National Science College" from="2017" to="2019"/>
            </div>
            )
        }
    }
    
export default Education
    