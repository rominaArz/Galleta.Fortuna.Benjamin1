
import './App.css'
import phrases from './utils/phrases.json'
import Cookie from './components/Cookie'
import PlayButton from './components/PlayButton'
import { useState } from 'react'
import getRandomElemArray from './utils/GetRandomElemArray'


function App() {

const phraseRandom = getRandomElemArray(phrases)
  
const [phraseState, setPrhaseState] = useState(phraseRandom)
const numberRandom = getRandomElemArray([1,2,3,4])

const [imageBg,setImageBg] = useState(numberRandom)

const bgStyle = {
    backgroundImage: `url(/fondo${imageBg}.jpg)`
}


  return (
   <div className='container' style={bgStyle}>
    <h1 className='container-title'>Galleta de la fortuna</h1>
    <Cookie prase={phraseState}/>
    <PlayButton 
    setPrhaseState = {setPrhaseState}
    phrases={phrases}
    setImageBg = {setImageBg}
    
    />
   </div>
  )
}

export default App
