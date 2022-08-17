import React, { Component } from 'react';
import profilepic from '../img/photo.jpeg';

class About extends Component {
    render() {
        return (
            <div className="condiv">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>   
            <h1 className="subtopic">About Me</h1>
            <h4>Hey there,</h4>
            <h1>I'm SHIVNARAYAN YADAV</h1>
            <h3><u>Want To Become A React Developer</u></h3>
            <br></br>
            <p>I am a self-taught React.Js and JavaScript developer with a Bachelor's degree in Information Technology.<br />
                I've always found coding intuitive and have pushed myself<br />to learn the most effective ways to achieve a result.<br />
                I'm a fast learner and can quickly integrate into a team <br />so l can provide value to the company
            </p>
            
            </div>
            )
        }
    }
    
export default About
    