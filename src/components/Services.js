import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faReadme } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">My Services</h1>
            <div className="container">
                <div className="row">
                    {/* ------------ Blog ------------ */}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faReadme} size="2x" /></div>
                            <h3>Blog</h3>
                            <p>Comming soon...</p>

                        </div>
                    </div>
                    {/* ------------ Projects ------------ */}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faLaptopCode} size="2x" /></div>
                            <h3>Projects</h3>
                            <p> Comming soon...</p>

                        </div>
                    </div>
                    {/* ------------ LinkedIn ------------ */}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faLinkedin} size="2x" /></div>
                            <h3>LinkedIn</h3>
                            <p>Connect with me professionally.</p>

                        </div>
                    </div>
                    {/* ------------ GitHub ------------ */}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faGithub} size="2x" /></div>
                            <h3>GitHub</h3>
                            <p>Check out my latest projects.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
