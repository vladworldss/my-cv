import React, { Component } from 'react';
import ImgProfile from "../../images/ph_1.jpg";

class Profile extends Component {
    render() {
        return (
            <div>
                <div className="avatarImg">
                    <img className="circle responsive-img" src={ImgProfile} alt="Vladimir Gerasimenko" />

                </div>
            </div>
        );
    }
}

export default Profile;