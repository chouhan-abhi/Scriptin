import { Suspense, lazy, useEffect, useState } from "react";
import Header from "./header";
import { scriptListService } from "../service";

const Body = lazy(() =>  import('./body'));

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
    updateScripts(getList() || [])
  }, [])

  return (
    <div>
      <Header />
      <Suspense fallback='Loading...'>
        <Body scripts={scripts} addScript={handleScriptListUpdate} />
      </Suspense>
    </div>
  );
}


export default Layout;