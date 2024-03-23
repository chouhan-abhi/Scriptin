import { useState } from "react";
import Body from "./body";
import Header from "./header";

const Layout = () => {
    const DUMMY_SCRIPTS = [];
  
    const [scripts, updateScripts] = useState(DUMMY_SCRIPTS);
  
    return (
      <div>
        <Header />
        <Body scripts={scripts} addScript={updateScripts} />
      </div>
    );
  }

  
export default Layout;