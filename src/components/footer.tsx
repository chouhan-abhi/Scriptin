import { Editor } from "@monaco-editor/react";
import { useState } from "react";

const Footer = ({addScript}) => {
    const [content, updateContent] = useState<string | undefined>();

    const footer = {
      width: '98vw',
      position: 'fixed',
      bottom: '10px'
    }

    const ActionBarStyle = {
      display: 'flex',
      alignItem: 'center',
      justifyContent: 'center',
      padding: '1vw'
    }

    const ActionBar = () => (
      <div style={ActionBarStyle}>
        <button onClick={() => addScript( prev => {return [...prev, content]})}> Save </button>
      </div>
    );
  
    return (
      <footer style={footer}>
        <Editor
          width="98vw"
          language="javascript"
          theme="vs-dark"
          value={content}
          className="EditionBoxStyle"
          onChange= { (updatedContent) => updateContent(updatedContent)}
        />
        <ActionBar />
      </footer>
    )
  }

  export default Footer;