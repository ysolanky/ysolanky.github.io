import './App.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faFilePdf,faLocationDot } from '@fortawesome/free-solid-svg-icons'
import React from 'react'


class AppBase extends React.Component {
    componentDidMount() {
        if (
            "IntersectionObserver" in window &&
            "IntersectionObserverEntry" in window &&
            "intersectionRatio" in window.IntersectionObserverEntry.prototype
        ) {
            let observer = new IntersectionObserver(entries => {
                if (entries[0].boundingClientRect.y < 0) {
                    document.body.classList.add("header-not-at-top");
                } else {
                    document.body.classList.remove("header-not-at-top");

                }
            }, {
                root: null,
                threshold: 1.0
            });
            observer.observe(document.querySelector("#top-of-site-pixel-anchor"));
        }
    }

    render() {
        let iconColor = "#000066";

        return (
            <div>
                <header id="header">
                    <div>
                        <ul className="c-social">
                            <li>
                                <a target="_blank"  rel="noreferrer" href="mailto:ysolanky@iu.edu" title="Email">
                                    <FontAwesomeIcon icon={faEnvelope} color={iconColor}/>
                                </a>
                            </li>
                            <li>
                                <a target="_blank"  rel="noreferrer" href="resume.pdf" title="Resume">
                                    <FontAwesomeIcon icon={faFilePdf} color={iconColor}/>
                                </a>
                            </li>

                            <li>
                                &nbsp; Yash &nbsp;
                            </li>
                            <li>
                                <a target="_blank"  rel="noreferrer" href="https://www.linkedin.com/in/ysolanky"
                                   title="LinkedIn">
                                    <FontAwesomeIcon icon={faLinkedin} color={iconColor}/>
                                </a>
                            </li>
                            <li>
                                <a target="_blank"  rel="noreferrer" href="https://github.com/ysolanky" title="Github">
                                    <FontAwesomeIcon icon={faGithub} color={iconColor}/>
                                </a>
                            </li>

                        </ul>
                    </div>
                </header>
                <body>
                <div className="titlecard">
                    Yash Pratap Solanky
                </div>

                <div className="map-pin">
                    <FontAwesomeIcon icon={faLocationDot} color={iconColor}/>
                    &nbsp; Bloomington, Indiana
                </div>
                <div>
                    <ul className="c-social">
                        <li>
                            <a target="_blank"  rel="noreferrer" href="mailto:ysolanky@iu.edu" title="Email">
                                <FontAwesomeIcon icon={faEnvelope} color={iconColor}/>
                            </a>
                        </li>
                        <li>
                            <a target="_blank"  rel="noreferrer" href="resume.pdf" title="Resume">
                                <FontAwesomeIcon icon={faFilePdf} color={iconColor}/>
                            </a>
                        </li>
                        <li>
                            <a target="_blank"  rel="noreferrer" href="https://www.linkedin.com/in/ysolanky" title="LinkedIn">
                                <FontAwesomeIcon icon={faLinkedin} color={iconColor}/>
                            </a>
                        </li>
                        <li>
                            <a target="_blank"  rel="noreferrer" href="https://github.com/ysolanky" title="Github">
                                <FontAwesomeIcon icon={faGithub} color={iconColor}/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="about-me">
                    Data Science Graduate Student at Indiana University
                </div>
                </body>
                <div id="top-of-site-pixel-anchor"></div>
            </div>
        );
    }
}

export default AppBase;
