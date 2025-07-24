import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiPython,
  SiDjango,
  SiSocketdotio,
  SiPostgresql,
  SiJsonwebtokens,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiApachenetbeanside,
  SiGithub,
  SiGit,
  SiFastapi,
  SiSqlite
} from "react-icons/si";
import GitHubCalendar from "react-github-calendar";
import Roadmap from "./Roadmap";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            <strong>I’m a Computer Engineering student</strong> in my  <strong>eighth semester</strong> and a <strong>Fullstack developer</strong> with experience building <strong>functional</strong> and <strong>user-focused</strong> web applications. I’m 19 years old, native Spanish speaker, and comfortable communicating in English in both technical and collaborative settings.
          </p>
          <p>
            I have over a year of experience as a <strong>freelance developer</strong>, creating tailored solutions for small businesses and clients. My focus is on building technology that <strong>solves real problems</strong>, automates tasks, and improves digital workflows.
          </p>
          <p>
            I specialize in <strong>modern web development</strong>, both frontend and backend. I’ve worked on <strong>personal projects</strong>, <strong>team collaborations</strong>, and delivered real-world solutions. My stack includes <strong>React</strong>, <strong>Django</strong>, <strong>FastAPI</strong>, <strong>Node.js</strong>, <strong>SQL</strong>, <strong>JWT</strong>, and more, always using <strong>Git</strong> and <strong>GitHub</strong> for version control.
          </p>
          <p>
            I value <strong>clean code</strong>, <strong>learning continuously</strong>, and building in environments where <strong>teamwork</strong>, <strong>ownership</strong>, and <strong>problem-solving</strong> are essential. I’m not just looking to code — I aim to <strong>contribute, grow, and create meaningful impact</strong>.
          </p>
        </div>

      </div>
      <Roadmap />



      <h2>Technologies I've Worked On</h2>
      <div className="tech-stack">
        <SiHtml5 title="HTML" />
        <SiCss3 title="CSS" />
        <SiJavascript title="JavaScript" />
        <SiGithub title="GitHub" />
        <SiGit title="Git" />
        <SiPython title="Python" />
        <SiDjango title="Django" />
        <SiFastapi title="FastAPI" />
        <SiSocketdotio title="WebSockets" />
        <SiPostgresql title="SQL" />
        <SiJsonwebtokens title="JWT" />
        <SiVite title="Vite" />
        <SiApachenetbeanside title="APIs" />
        <SiReact title="React" />
        <SiNodedotjs title="Node.js" />
        <SiExpress title="Express" />
      </div>


      <div className="day-code">
      <h2>Days I code</h2>
      <div className="day-code-container">
      <GitHubCalendar username="Dixon282005"  />
       </div>
    </div>

    </section>
  );
}

export default About;
