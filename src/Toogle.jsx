import React, { useState} from 'react'

const Toogle = () => {
  const [isOn, setIsOn] = useState("off");

  const handleToogle = (() => {isOn==='off' ? setIsOn('on'):setIsOn('off')})
  return (
    <><h1>Toogle</h1>
      <h4>{isOn}</h4>
      <button onClick={handleToogle}>button {isOn}</button>
      </>
  )
}

export default Toogle