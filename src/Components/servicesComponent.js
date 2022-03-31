import React from 'react';
import '../style/services.css';
 
const Services = (props) => {
    return(
        <div className="services">
                <h1 className="h1">Services</h1>    
                <div className="cen">
                    <div className="service">
                        <i className="fab fa-java"></i>
                        <h2>JAVA</h2><br/>
                        <p>Core java</p>
                        <p>I want to work on new projects and learn new techniques. Available as a freelancer for Web and API Development and other Web Projects.</p>
                    </div>
                    <div className="service">
                        <i className="fab fa-java"></i>
                        <h2>JAVA</h2><br/>
                        <p>Advance java</p>
                        <p>I used java MVC to build a fully functional and dynamic website. However, I love to code in java but also want to learn new 
technology.</p>
                    </div>
                    <div className="service">
                        <i className="fab fa-java"></i>
                        <h2>Android</h2><br/>
                        <p>Android application</p>
                        <p>I'm a beginner in Spring but I also want to gain some experience in Android application Development. So I'm always open to work in it.</p>
                    </div>
                </div>
                <hr className="hr"/>
                <div className="container">
                    <h1 className="no-class">It's never too late to start.&nbsp;&nbsp; Let's&nbsp;&nbsp;start together.</h1>
                    <br/>
                </div>
            </div>
    );
}

export default Services;