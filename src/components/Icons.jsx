import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Icons () {
    return (
<div className="social-icons-container">
    <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
        <FaGithub className="social-icon" />
    </a>
    <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="social-icon" />
    </a>
    <a href="https://instagram.com/tuusuario" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="social-icon" />
    </a>
</div>
);
}

export default Icons;