import React from 'react';
import './works.css';
import portfolio1 from '../../assets/Portfolio1.png';
import portfolio2 from '../../assets/Portfolio2.png';
import portfolio3 from '../../assets/Portfolio3.png';
import portfolio4 from '../../assets/Portfolio4.png';
import portfolio5 from '../../assets/Portfolio5.png';
import portfolio6 from '../../assets/Portfolio6.png';

function Works() {
    return (
        <section className="works">
            <h2 className="workstitle">My Portfolio</h2>
            <span className="worksdesc">I take pride in paying attention to the smallest details and make sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses
                achieve their goals and create a strong online presence.</span>
            <div className="worksImgs">
                <img src={portfolio1} alt="" className="worksImg" />
                <img src={portfolio2} alt="" className="worksImg" />
                <img src={portfolio3} alt="" className="worksImg" />
                <img src={portfolio4} alt="" className="worksImg" />
                <img src={portfolio5} alt="" className="worksImg" />
                <img src={portfolio6} alt="" className="worksImg" />
            </div>
            <a href="https://github.com/DevPBhardwaj" target="_blank" rel="noopener noreferrer" className="workBtn">Explore Projects...</a>
        </section>
    );
}

export default Works;
