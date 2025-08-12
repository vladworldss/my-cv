import React, { Component } from 'react';

import styles from './Experience.css';

class Experience extends Component {
    render() {
        return (
            <div>
                <div className="card teal lighten-3 z-depth-0">
                    <div className="card-content">
                        <h6 className="brown-text text-darken-4">
                            <strong>
                                <i className="fas fa-tools">EXPERIENCE</i>
                            </strong>
                        </h6>
                        <hr />
                        <div className="row mt">
                            <div className="col s12">
                                <blockquote>
                                    <h6 className="brown-text text-darken-4">
                                        <strong>Back End Developer&nbsp;</strong>
                                        <span>2021-till now</span>
                                        <p className="brown-text text-darken-4">
                                        <strong>
                                        <a href="https://dbs-t.ru/" target="_blank" rel="noopener noreferrer">DBS Technologies, Moscow</a>
                                        </strong>
                                        </p>
                                        <p>Developed
                                        <a href="https://dbs-t.ru/aml" target="_blank" rel="noopener noreferrer"> AML Compliance </a>
                                        software with
                                        Kafka-based scoring pipelines and integrated AliExpress transaction data.
                                        Designed and implemented microservices for receipt fiscalization and
                                        correction in compliance with Uzbekistan’s tax regulations
                                        <a href="https://dbs-t.ru/ofd" target="_blank" rel="noopener noreferrer"> OFD 1.0 </a>.
                                        Built scalable APIs and dynamic dashboards for over 1,000 merchants,
                                        processing 18K+ receipts daily.
                                        </p>
                                        <p>
                                        Also implemented a chargeback processing service for disputed payments made via
                                        AliExpress, using data from the National Payment Card System.
                                        Applied Clean Architecture, asynchronous frameworks, and CI/CD practices
                                        to ensure high-load resilience and testability.
                                        </p>
                                    </h6>
                                </blockquote>
                                <blockquote>
                                    <h6 className="brown-text text-darken-4">
                                        <strong>Back End Developer&nbsp;</strong>
                                        <span>2019-2021</span>
                                        <p className="brown-text text-darken-4">
                                        <strong>
                                        <a href="https://wargaming.net/en" target="_blank" rel="noopener noreferrer">Wargaming, Minsk</a>
                                        </strong>
                                        </p>
                                        <p>Developed new and maintains existing web applications. Used
                                        microservice architecture for some services. Interacted regularly with
                                        managers, system designers. Follower of TDD, Unit-testing, code style,
                                        CI/CD. Released a new version of WoT Portal in CN. Developed a new
                                        season of ranked battles and clan features.
                                        </p>
                                    </h6>
                                </blockquote>
                                <blockquote>
                                    <h6 className="brown-text text-darken-4">
                                        <strong>UI Developer&nbsp;</strong>
                                        <span>2018-2019</span>
                                        <p className="brown-text text-darken-4">
                                        <strong>
                                        <a href="https://wargaming.net/en" target="_blank" rel="noopener noreferrer">Wargaming, Minsk</a>
                                        </strong></p>
                                        <p>Programming UI World of Tanks client 
                                            <a className="brown-text text-darken-4 pt" href="https://worldoftanks.com" target="_blank">
                                                <strong > worldoftanks.com</strong>
                                            </a>.
                                        Developed client windows and widgets including sound system.
                                        Optimization and refactoring of UI logic and related subsystems.
                                        Embed Python and C++ used MVC pattern. Developed some unique
                                        game mechanics that successfully released for more than million
                                        gamers.
                                        </p>
                                    </h6>
                                </blockquote>
                                <blockquote>
                                    <h6 className="brown-text text-darken-4">
                                        <strong>Principal Software Developer&nbsp;</strong>
                                        <span>2017-2018</span>
                                        <p className="brown-text text-darken-4"><strong>OJSC GlobalInformService, Moscow</strong></p>
                                        <p>Developed testing framework for radio network system. Worked closely
                                        with PHY research engineers. Integrated math/C models for RF digital
                                        frontend. Project documentation support and creating. Developed a
                                        new radio network test framework.
                                        </p>
                                    </h6>
                                </blockquote>
                                <blockquote>
                                    <h6 className="brown-text text-darken-4">
                                        <strong>Web Software Developer&nbsp;</strong>
                                        <span>2016-2017</span>
                                        <p className="brown-text text-darken-4"><strong>OJSC Start inn, Moscow</strong></p>
                                        <p>Developed new and maintains existing back end applications.
                                        Handling of mobile vendor data (Siemens, ZTE, Huawei, Samsung, NEC,
                                        NSN) for all levels (Transport, Hardware, License). Design of fault
                                        tolerance in distributed systems. Create a user-defined parser with a
                                        different format and structure. Project documentation support and
                                        creating.
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

export default Experience;