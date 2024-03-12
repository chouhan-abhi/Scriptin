import { useEffect, useState } from 'react'

interface IQuotes{
  content: string;
  author: string;
}

function Quotes() {

  const [quote, updateQuote] = useState<IQuotes | undefined>();
  
  useEffect(()=>{
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    fetch("https://api.quotable.io/random", requestOptions as any)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        updateQuote(result);
      })
      .catch((error) => console.error(error));

  }, []);

  return (
    <>
      <div className="Cards">
        <div style={{ backdropFilter: 'blur(8px)', padding: '8opx'}}>
        <b>Today's Quote</b>
        <p>
          "{quote?.content || 'Hold on; we are brewing something for you...' }"
        </p>
        <i>~{quote?.author}</i>
        </div>
      </div>
    </>
  )
}

export default Quotes;