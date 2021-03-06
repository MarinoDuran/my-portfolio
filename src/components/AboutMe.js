import React from "react";
import author from "../self-portrait.jpeg";

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="Marino Selfie" />
                    </div>


                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>
                        Hi My name is Marino and I am a cloud engineer.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
