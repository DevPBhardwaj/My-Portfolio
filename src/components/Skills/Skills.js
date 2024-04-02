import React from "react";
import "./Skills.css";
import ReactImg from "../../assets/React.png"
import Backend from "../../assets/Backend.png"
import Database from "../../assets/Database.png"

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">As a seasoned full-stack web developer, I excel in HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and Firebase.
                I leverage design tools such as Figma and Adobe XD to craft comprehensive web solutions.
            </span>
            <div className="skillBar">
                <img src={Backend} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Backend </h2>
                    <p>MongoDB, Node.js, Express.js, and more for robust server-side functionality.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={ReactImg} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Frontend</h2>
                    <p>Passionate Frontend Developer skilled in HTML, CSS, JavaScript, React.js, and more, crafting engaging user interfaces for exceptional user experiences</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={Database} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Database</h2>
                    <p>Skilled in MongoDB, SQL, and Firebase for efficient data handling.</p>
                </div>
            </div>
        </section>
    )
}

export default Skills;