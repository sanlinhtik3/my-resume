import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdown = `Just a link: https://reactjs.com.`;

const Markdown = ({ className, children = markdown }) => {
  return (
    <>
      <div className={`${className}`}>
        <ReactMarkdown children={children} remarkPlugins={[remarkGfm]} />
      </div>
    </>
  );
};

export default Markdown;
