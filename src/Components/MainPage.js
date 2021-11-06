
import React from "react";

import '../Styles/MainPage.css';

function MainPage() {
    return (
        <div className="mainPage">

            <div className="lead-banner">
                <img src="img/banner-1.png" />
                <div className="banner-content">
                    <div className="wrapper">
                        <span className="title">Check our video</span>
                        <span className="sub-title">Learning in 6 weeks</span>
                    </div>
                </div>
            </div>
        
            <section className = "services">
                <div className="wrapper">
                    <h1>Services</h1>
                    <div >
                        <div className = "items">
                            <img src="img/icon-1.png" />
                            <a href="#">Recording<br />services</a>
                        </div>
                        <div className = "items">
                            <img src="img/icon-2.png" />
                            <a href="#">Get a printed<br />certificate</a>
                        </div>
                        <div className = "items">
                            <img src="img/icon-3.png" />
                            <a href="#">Lessons via<br />Skype</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="lessons-banner">
                <img src="img/banner-2.png" />
                <div className="banner-content">
                    <div className="wrapper">
                        <span className="title">Our Lessons</span>
                        <span className="sub-title">Are Easy</span>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <section className="projects">
                <div className="wrapper">
                    <h1>Our Projects</h1>
                    <ul>
                        <li><img src="http://placehold.it/150x150" /></li>
                        <li><img src="http://placehold.it/150x150" /></li>
                        <li><img src="http://placehold.it/150x150" /></li>
                        <li><img src="http://placehold.it/150x150" /></li>
                        <li><img src="http://placehold.it/150x150" /></li>
                        <li><img src="http://placehold.it/150x150" /></li>
                        <li><img src="http://placehold.it/150x150" /></li>
                        <li><img src="http://placehold.it/150x150" /></li>
                        <li><img src="http://placehold.it/150x150" /></li>
                        <li><img src="http://placehold.it/150x150" /></li>
                        <li><img src="http://placehold.it/150x150" /></li>
                        <li><img src="http://placehold.it/150x150" /></li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
  
  export default MainPage;