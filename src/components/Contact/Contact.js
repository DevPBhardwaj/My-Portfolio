import React from 'react';
import './contact.css';
import Whatsapp from '../../assets/whatsapp.png';
import Github from '../../assets/Github.png';
import Linkedin from '../../assets/Linkedin.png';

function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4e6555d6-9c3d-44d2-a2c7-eef71c9e0741");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setTimeout(() => {
        window.location.reload(); // reload the page after 3 seconds
      }, 2000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <section className="TechStack" id="TechStack">
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack & Packages</h2>
        <p className="text-gray-600 max-width text-size flex mb-6">
          As a dynamic Full-Stack Developer, I bring a comprehensive suite of technical skills that include mastery in a
          range of programming languages and proficiency in front-end frameworks, back-end development, and various
          packages and tools. My skills are supported by robust experience with database management and an array of
          design and UX tools.
        </p>
        <div className="flex flex-wrap gap-4">
          <span className="bg-gray-800 text-white px-3 py-1 rounded-md text-xs font-semibold">HTML</span>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-md text-xs font-semibold">CSS</span>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-md text-xs font-semibold">JavaScript</span>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-md text-xs font-semibold">Python</span>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-md text-xs font-semibold">SQL</span>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-md text-xs font-semibold">React.js</span>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-md text-xs font-semibold">Node.js</span>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-md text-xs font-semibold">MongoDB</span>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-md text-xs font-semibold">Firebase</span>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-md text-xs font-semibold">GitHub</span>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-md text-xs font-semibold">Figma</span>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-md text-xs font-semibold">Express.js</span>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-md text-xs font-semibold">jQuery</span>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-md text-xs font-semibold">Bootstrap</span>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-md text-xs font-semibold">Axios</span>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-md text-xs font-semibold">React Router</span>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-md text-xs font-semibold">Mongoose</span>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-md text-xs font-semibold">React Icons</span>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-md text-xs font-semibold">Sketch</span>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-md text-xs font-semibold">Adobe XD</span>
        </div>
      </div>

      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
        <form onSubmit={onSubmit} action="https://formsubmit.co/el/ledojo" method="POST" className="contactForm">
          <input type="text" name="name" className="name" placeholder="Your Name" required/>
          <input type="email" name="email" className="email" placeholder="Your Email" required/>
          <textarea name="message" rows="5" className="msg" placeholder="Your Message"></textarea>
          <button type="submit" className="submitBtn">Submit</button>
          <span>{result}</span>
        <div className="links">
          <a href="https://linkedin.com/in/software-dev-priyanshu"><img src={Linkedin} alt="Linkedin" className="link" /></a>
          <a href="https://github.com/DevPBhardwaj" target="_blank" rel="noreferrer"><img src={Github} alt="Github" className="link" /></a>
          <a href="https://api.whatsapp.com/send?phone=5483335670" target="_blank" rel="noreferrer"><img src={Whatsapp} alt="Whatsapp" className="link" /></a>
        </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;


