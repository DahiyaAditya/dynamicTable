import React, { useEffect, useState } from 'react'

const CompletedTask = ({completedTask,handleCompletedDelete}) => {
    const [data, setData]=useState([]);
    useEffect(()=>{
        setData(completedTask);
    },[completedTask])

    const handleDlete=(key)=>{
        const remove = data.filter((value,index)=>{
            return(
                index !== key
            )
        })
        handleCompletedDelete(key)
       
        setData(remove)
    }
  return (
    <div>
         {
            data.map((obj,key)=>{
                return(
                    <div key={key}>
                        {obj}
                        <button onClick={()=>handleDlete(key)}>delete</button>
                    </div>
                )
            })
         }
    </div>
  )
}

export default CompletedTask