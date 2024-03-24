import { useEffect, useState } from "react";
import Body from "./body";
import Header from "./header";
import { scriptListService } from "../service";

export interface IScript {
  id: string;
  content?: any;
  heading?: string;
  type?: string;
  dateCreated: string,
}

const Layout = () => {
  const { getList, setList } = scriptListService;
  const [scripts, updateScripts] = useState<IScript[] | undefined>([]);

  const handleScriptListUpdate = (newScript: IScript) => {
    updateScripts( prev => {
      const newList = [...prev, newScript];
      setList(newList);
      return newList;
    });
  }

  useEffect(()=> {
    updateScripts(getList())
  }, [])

  return (
    <div>
      <Header />
      <Body scripts={scripts} addScript={handleScriptListUpdate} />
    </div>
  );
}


export default Layout;