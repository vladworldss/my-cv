import React, {Component} from 'react';

import About from "./about/About";
import Contact from "./contact/Contact";
import Experience from "./experience/Experience";
import Educations from "./educations/Educations";
import Profile from "./profile/Profile";
import Summary from "./summary/Summary";
import Skills from "./skills/Skills";



export default class Home extends Component {
    render(){
        return (
            <section>
                <div className="row">
                    <About />
                </div>
                <div className="row sameHeigh hide-on-med-and-down">
                    <div className="col s12 m12 l8 teal lighten-3 sameHeight_child">
                        <Summary />
                        <Educations />
                        <Experience />
                    </div>
                    <div className="col s12 m12 l4 teal lighten-1 sameHeight_child">
                        <Profile />
                        <Contact />
                        <Skills />
                    </div>
                </div>
                <div className="row sameHeigh hide-on-large-only">
                    <div className="col s12 m12 l4 teal lighten-1 sameHeight_child">
                        <Summary />
                        <Educations />
                        <Experience />
                    </div>
                    <div className="col s12 m12 l8 teal lighten-3 sameHeight_child">
                        <Profile />
                        <Contact />
                        <Skills />
                    </div>
                </div>
            </section>
        )
    }
}