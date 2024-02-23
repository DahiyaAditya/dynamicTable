import React, { useEffect } from 'react'
import { useState } from 'react'
const InputField = ({gettingData}) => {
  
    const [data, setData] = useState([]);
    const handleText=(e)=>{
        setData(e.target.value);
    }
    const handleTextSubmit=()=>{
        gettingData(data);
        setData("")
    }
  return (
    <div>
        <input type='text' value={data} onChange={handleText}></input>
        <button onClick={handleTextSubmit}>Submit</button>
    </div>
  )
}

export default InputField