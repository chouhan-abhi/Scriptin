import { useState } from "react";
import Body from "./body";
import Footer from "./footer";
import Header from "./header";

const Layout = () => {
    const DUMMY_SCRIPTS = [{heading: 'Card1', content: 'Helloworld'}];
  
    const [scripts, updateScripts] = useState(DUMMY_SCRIPTS);
  
    return (
      <div>
        <Header />
        <Body scripts={scripts}/>
        <Footer addScript={updateScripts} />
      </div>
    );
  }

  
export default Layout;