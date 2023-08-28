import React from 'react'
import getRandomElemArray from '../utils/GetRandomElemArray'

const PlayButton = ({setPrhaseState, phrases, setImageBg}) => {

  const handlePhrase = () => {
    setPrhaseState(getRandomElemArray(phrases))
    setImageBg(getRandomElemArray([1,2,3,4]))
  }

  return (
    <button className='container-btn' onClick={handlePhrase}>Ver otro▶</button>
  )
}

export default PlayButton