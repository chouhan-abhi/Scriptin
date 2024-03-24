// @ts-nocheck
import { Suspense, useMemo, useState, lazy } from "react";
import Footer from "./footer";
import CounterCard from "./features/counter";

const Quotes = lazy(() => import('./quotes'));

const Body = ({ scripts, addScript }) => {

  const defaultToggles = { isAddCounter: false, isAddScript: false };
  const [toggles, updateToggles] = useState(defaultToggles);

  const Note = ({note, index}) => {
    const [isExpanded, toggleSize] = useState(false);
    return (
      <p className={isExpanded ? 'Cards CounterCard' : 'Cards'} key={'card' + index} onClick={() => toggleSize( prev => !prev)}>
        <div>
          <b><u>{note?.heading}</u></b> 
          {note?.type ? <span className="Tag">{note.type}</span> : ''}
        </div>
        <div>
          <pre>{note?.content}</pre>
          <span className="DateContainer">Date: {note?.dateCreated}</span>
        </div>
      </p>
    )
  }

  const Notes = () => {
    return (
      <p>
        {scripts?.length ? scripts.map((script: any, index) => (
          <Note note={script} />
        )) : ''}
      </p>
    )
  }

  const CounterButton = () => {
    return (
      <div className="Cards Button" onClick={() => updateToggles(prev => ({ ...prev, isAddCounter: !prev.isAddCounter }))}>
        {!toggles.isAddCounter ? 'Start' : 'Cancel'} Counter
      </div>
    )
  }

  const AddScriptButton = () => {
    return (
      <div className="Cards Button" onClick={() => updateToggles(prev => ({ ...prev, isAddScript: !prev.isAddScript }))}>
        {!toggles.isAddScript ? 'Add' : 'Cancel'} Script
      </div>
    )
  }

  const newCounterIndexNumber = useMemo(() => {
    return (scripts?.filter(script => script.type === 'COUNTER')?.length || 0) + 1;
  }, [scripts]);

  return (
    <div>
      <Suspense fallback="Loading...">
        <Quotes />
      </Suspense>
      <CounterButton />
      <AddScriptButton />
      {toggles.isAddCounter && <CounterCard cardIndex={newCounterIndexNumber} addScript={addScript} />}
      <Notes />
      {toggles.isAddScript && <Footer addScript={addScript} />}
    </div>)
}

export default Body;