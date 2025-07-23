import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Icons () {
    return (
<div className="social-icons-container">
    <a href="https://github.com/Dixon282005" target="_blank" rel="noopener noreferrer">
        <FaGithub className="social-icon" />
    </a>
    <a href="https://www.linkedin.com/in/diki28/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="social-icon" />
    </a>
    <a href="https://www.instagram.com/arturr2805/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="social-icon" />
    </a>
</div>
);
}

export default Icons;