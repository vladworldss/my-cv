import React, { Component } from 'react';

class Educations extends Component {
    render() {
        return (
            <div>
                <div className="card teal lighten-3 z-depth-0">
                    <div className="card-content">
                        <h6 className="brown-text text-darken-4">
                            <strong>
                                <i className="fas fa-graduation-cap">EDUCATION</i>
                            </strong>
                        </h6>
                        <hr />
                        <div className="row mt">
                            <div className="col s12">
                                <blockquote>
                                    <h6 className="brown-text text-darken-4">
                                        <strong>Master of Science (MSc), Automation and Technological Processes and production</strong>
                                        <p className="brown-text text-darken-4"><strong>Pavel Sukhoi State Technical University of Gomel</strong></p>
                                        <span>2014-2016</span>
                                    </h6>
                                </blockquote>
                                <blockquote>
                                    <h6 className="brown-text text-darken-4">
                                        <strong>Engineer's degree, Automation, telemechanics and communication for railway transport</strong>
                                        <p className="brown-text text-darken-3"><strong>Belarusian State University of Transport</strong></p>
                                        <span>2007-2012</span>
                                        <p>Belarus Presidential University Scholars. Author of 8 scientific works.
                                        Area of research: "The reliability of local exchange carrier (LEC) network"
                                        </p>
                                    </h6>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Educations;