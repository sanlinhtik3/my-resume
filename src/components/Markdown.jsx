import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdown = `Highly skilled and motivated Frontend Web Developer and Web UI/UX Designer with extensive experience in modern web development, proficient in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React.js. Adept at creating clean and beautiful UI/UX designs. Seeking challenging opportunities to utilize my skills and contribute to innovative web development projects. Currently, I am teaching at inficreax as a Frontend Web Developer. I have got 3+ years experience in web development field.`;

const Markdown = ({ className, children }) => {
  return (
    <>
      <div className={`${className}`}>
        <ReactMarkdown children={children ? children : markdown} remarkPlugins={[remarkGfm]} />
      </div>
    </>
  );
};

export default Markdown;
