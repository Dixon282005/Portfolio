import { useEffect, useState } from "react";

function Typewriter() {
  const phrases = [
    "FullStack Developer",
    "React & Django Lover",
    "Creative Problem Solver",
    "Building things for the web 🌐",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText(current.slice(0, charIndex));

      if (!isDeleting && charIndex < current.length) {
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <span>
      {text}
      <span className="cursor"></span>
    </span>
  );
}

export default Typewriter;
