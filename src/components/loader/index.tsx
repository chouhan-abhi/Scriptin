import './loader.css'

//Dummy component only responisble to show content loading

const Loader = () => {
  return (
    <p className='loader-container'>
        <div className='loader-heading loader-animated'>&#8203;</div>
        <div className='loader-content loader-animated'>&#8203;</div>
        <div className='loader-content loader-animated'>&#8203;</div>
        <div className='loader-content loader-animated'>&#8203;</div>
        <div className='loader-content loader-animated'>&#8203;</div>
    </p>
  )
}

export default Loader;
