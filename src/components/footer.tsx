// @ts-nocheck
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import { IScript } from "./layout";

const Footer = ({addScript}) => {
    const [content, updateContent] = useState<IScript | undefined>({});

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

    const handleContentUpdate = (updatedContent: string) => {
      updateContent( prev => {
        return {...prev, content: updatedContent}
      });
    }

    const handleAddNewCard = () => {
      const splitedContent = content?.content?.split('#');
      const heading = splitedContent?.[0] || 'Untitled-' + Date.now();
      const parsedContent = (content?.content.replace(heading+'#', ''))?.trim();
      const type = 'NOTE'
      const tempContent: IScript = { type, heading, content: parsedContent, id: Date.now(), dateCreated: new Date().toLocaleString() };
      
      addScript(tempContent);
      updateContent(undefined);
    }

    const ActionBar = () => (
      <div style={ActionBarStyle}>
        <button onClick={() => handleAddNewCard()}> Save </button>
      </div>
    );
  
    return (
      <footer style={footer}>
        <div className="EditionBoxStyle">
          <Editor
            language="javascript"
            height='200px'
            width="98%"
            theme="vs-dark"
            value={content?.content || ''}
            onChange={ (updatedContent: string) => handleContentUpdate(updatedContent)}
          />
          <ActionBar />
        </div>
      </footer>
    )
  }

  export default Footer;