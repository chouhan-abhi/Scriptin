const Body = ({scripts}) => {
    console.log('scripts', scripts)
    const bodyStyle = {
      display: 'flex',
      alignContent: 'center',
    }
  
    const cards = {
      display: 'inline',
      textAlign: 'center',
      border: '2px solid black',
      margin: '2px',
      padding: '4px',
      borderRadius: '4px'
    }
  
    return (
      <div style={bodyStyle}> 
        {scripts?.length && scripts.map( script => <p style={cards}> {script} </p>)}
      </div>)
  }

  export default Body;