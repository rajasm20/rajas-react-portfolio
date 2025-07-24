import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.png';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                        Hello! I'm Rajas, currently studying at King's College London pursuing my Master's in 
                        Computer Science with a major in Advanced Computing. Before my degree, I 
                        gained valuable experience in software development at a startup, where I worked for a year. 
                         Additionally, I am serving as a technical lead at a company that I co-founded during my undergrad, 
                        focusing on digitizing and transitioning paper-based marchant navy course distribution operations online.<br /><br />
                        As I pursue a distinction in my master's degree, I am actively seeking entry-level roles in the industry alongwith
                            expanding my portfolio by building more projects that I can add on here.<br /><br />
                        Here are a few technologies and tools I've been working with recently:
                        </p>
                        <ul className="about__list">
                            <li>Kotlin</li>
                            <li>Jetpack Compose</li>
                            <li>Firebase</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Tensorflow</li>
                            <li>Scikit-learn</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About