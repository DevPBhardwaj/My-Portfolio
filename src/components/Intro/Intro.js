import React, { useState } from "react";
import "./intro.css";
import bg from "../../assets/bg.png";

const Intro = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!expanded);
    };

    return (
        <section id="intro">
            <div className={`introContent ${expanded ? 'expanded' : ''}`}>
                <span className="hello">Hello</span>
                <span className="introText">I'm <span className="introName">Priyanshu</span><br />Website Developer </span>
                <p className="introPara">
                    I am a skilled web designer with experience in<br /> creating visually appealing and user-friendly websites.
                    {expanded && (
                        <>
                            <br />
                            I have dedicated over 1000 hours to coding and honing my skills,<br /> striving for excellence in every project.<br /> 
                            My journey has been marked by continuous learning and growth,<br /> 
                            enabling me to tackle complex challenges with confidence and creativity.
                        </>
                    )}
                </p>
                <button className="expandBtn" onClick={toggleExpansion}>
                    {expanded ? "Fold Up" : "More Details"}
                </button>
            </div>
            <img className="bg" src={bg} alt="bg" />
        </section>
    );
};

export default Intro;
