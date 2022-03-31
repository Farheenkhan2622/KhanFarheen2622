import React, { Component } from 'react';
import '../style/about.css';
 
class About extends Component {
    render() {
        return (
            <section id="about" className="about-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="box-shadow-full">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-5">
                                                <div className="about-img">
                                                    <img src="/images/Snapchat-879819121.jpg" className="img-fluid rounded b-shadow-a" alt="Ashish Sengar"/>
                                                </div>
                                                </div>
                                                <div className="col-sm-6 col-md-7">
                                                    <div className="about-info">
                                                        <p><i className="fa fa-address-book-o">&nbsp;&nbsp;</i><span className="title-s">Name: </span> <span>Farheen khan</span></p>
                                                        <p><i className="fa fa-briefcase"></i>&nbsp;&nbsp;<span className="title-s">Profile: </span> <span>Software developer</span></p>
                                                        <p><i className="fa fa-envelope-o"></i>&nbsp;&nbsp;<span className="title-s">mail: </span> <span>frkkhan063@gmail.com</span></p>
                                                        <p><i className="fa fa-phone-square">&nbsp;&nbsp;</i><span className="title-s">Phone: </span> <span>+91 7974611441</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="about-me pt-4 pt-md-0">
                                                <div className="title-box-2">
                                                    <h5 className="title-left">About me</h5>
                                                </div><br/>
                                                <p className="lead">
                                                    Hello, Welcome to my website, My name is Farheen khan and I am a Software Developer. I have completed  
                                                    my graduation in bachelors in Computer applications(BCA) from  Arihant college, Indore.
                                                </p>
                                                <p className="lead">
                                                    I am passionate about software Development and would like to learn and work with new projects to grow and learn new things.
                                                    I am a fresher looking for internships/Job and also availaible for freelancing projects.    
                                                </p>
                                                <p className="lead">
                                                    I am hard working and have good knowledge of new trends, technologies and tools in Computer Science.
                                                    I hope to contribute and develop effective, productive and new plans. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </section>

        );
    }
}

export default About;