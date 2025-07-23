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

function About() {
  return (
    <section id = "about" className="about-section">
      <div className="about-container">

        <div className="about-text">
          <h2>Sobre mí</h2>
          <p>
            Soy Dixon, desarrollador frontend con conocimientos en backend. Me especializo en crear interfaces modernas y funcionales utilizando React, JavaScript y tecnologías complementarias. Me apasiona construir aplicaciones que resuelvan problemas reales y seguir aprendiendo cada día.
          </p>
          <p>
            Actualmente desarrollo proyectos personales, colaborativos y de práctica para reforzar mis habilidades técnicas en frontend y backend. Tengo una base sólida en lógica de programación, consumo de APIs y despliegue web.
          </p>
        </div>
      </div>

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
    </section>
  );
}

export default About;
