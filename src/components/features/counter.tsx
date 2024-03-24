import { useEffect, useState } from "react";
import { IScript } from "../layout";

const CounterCard = ({ cardIndex, addScript }) => {
    const [count, updateCount] = useState(0);
    const [description, updateDescription] = useState(`Card ${cardIndex}`);

    const handleDescriptionUpdate = (text: any | undefined) => {
        updateDescription(text || '');
    }

    const handleCountSave = () => {
        const counterScript: IScript = {
            id: `CounterCard${cardIndex}`,
            content: `Occurence is ${count}`,
            heading: description,
            type: 'COUNTER',
            dateCreated: new Date().toLocaleString()
        }
        addScript( counterScript );
    }

    const CardFooter = () => {
        return (
            <div className="CardFooter">
                <button className="Button" onClick={() => updateCount(0)}>Reset</button>
                <button className="Button" onClick={() => handleCountSave()}>Save</button>
            </div>
        )
    }

    useEffect(() => {
        updateDescription(`Card ${cardIndex}`)
    }, [cardIndex])

    return (
        <div className="Cards CounterCard">
            <input
                className="CounterHeading"
                onChange={e => handleDescriptionUpdate(e?.target?.value || '')}
                value={description} />
            <span
                className="CounterButton"
                onClick={() => updateCount(prev => prev + 1)}>
                {count}
            </span>
            <CardFooter />
        </div>
    )
}

export default CounterCard;