// @ts-nocheck
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import Quotes from "./quotes"
const Body = ({scripts}) => {
    console.log('scripts', scripts)
  
    return (
      <div> 
        <Quotes />
        {scripts?.length && scripts.map( (script: { heading: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => <p className="Cards"> 
          <b>{script?.heading}</b>
          <p>
            <pre>{script?.content}</pre>
          </p>
         </p>)}
      </div>)
  }

  export default Body;