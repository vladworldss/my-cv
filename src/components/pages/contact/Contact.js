import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <div className="card teal lighten-5 z-depth-0 mt">
                    <div className="card-content contactInfo">
                        <p className="brown-text text-darken-4 pt">
                            <i className="fas fa-phone"> +375(44)51-444-16</i>
                            <br/>
                            <i className="fas fa-envelope-square"></i> vladworldss@yandex.ru
                            <br/>
                            <i className="fab fa-chrome"></i> mywebsite.com/
                            <br/>
                            <i className="fab fa-facebook-square"></i> 
                            <a  className="brown-text text-darken-4 pt" href="https://www.facebook.com/profile.php?id=100009868355804" target="_blank"> 
                            &nbsp;facebook.com</a>
                            <br/>
                            <i className="fa fa-linkedin"></i> 
                            <a  className="brown-text text-darken-4 pt" href="https://www.linkedin.com/in/vladimir-gerasimenko-aa4014100/" target="_blank"> 
                            &nbsp;linkedin.com</a>
                            <br/>
                            <i className="fab fa-github-square"></i> 
                            <a  className="brown-text text-darken-4 pt" href="https://www.github.com/vladworldss" target="_blank"> 
                            &nbsp;github.com/vladworldss</a>
                        </p>
                    </div>

                </div>
            </div>
        );
    }
}
