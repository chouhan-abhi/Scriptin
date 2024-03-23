// @ts-nocheck
import { useMemo, useState } from "react";
import Quotes from "./quotes";
import Footer from "./footer";

const Body = ({ scripts, addScript }) => {

  const defaultToggles = { isAddCounter: false, isAddScript: false };
  const [toggles, updateToggles] = useState(defaultToggles);

  const Notes = () => {
    return (
      <p>
        {scripts?.length ? scripts.map((script: any, index) => (
          <p className="Cards" key={'card' + index}>
            <b>{script?.heading}</b>
            <div>
              <pre>{script?.content}</pre>
            </div>
          </p>
        )) : ''}
      </p>
    )
  }

  const StartCounter = () => {
    return (
      <div className="Cards" onClick={() => updateToggles(prev => ({...prev, isAddCounter: !prev.isAddCounter }))}>
        {!toggles.isAddCounter ? 'Start' : 'Cancel'} Counter
      </div>
    )
  }

  const ShowAddScriptCard = () => {
    return (
      <div className="Cards" onClick={() => updateToggles(prev => ({...prev, isAddScript: !prev.isAddScript }))}>
        {!toggles.isAddScript ? 'Add' : 'Cancel'} Script
      </div>
    )
  }

  const newCounterIndexNumber = useMemo(() => {
    return (scripts?.filter( script => script.type === 'COUNTER')?.length || 0) + 1;
  }, [scripts]);

  const CounterCard = () => {
    const [count, updateCount] = useState(0);
    return (
      <p className="Cards CounterCard">
        <input className="CounterHeading" value={`Counter ${newCounterIndexNumber}`}/>
        <span className="CounterButton" onClick={() => updateCount(prev => prev + 1)}>{count}</span>
      </p>
    )
  }

  return (
    <div>
      <Quotes />
      <Notes />
      <StartCounter />
      <ShowAddScriptCard />
      {toggles.isAddScript && <Footer addScript={addScript} />}
      {toggles.isAddCounter && <CounterCard />}
    </div>)
}

export default Body;