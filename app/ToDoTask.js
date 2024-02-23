import React, { useEffect, useState } from 'react'

const ToDoTask = ({sendToDoData, handlePageDelte,sendCompletedTask}) => {
    const [data, setData]=useState([]);
    useEffect(()=>{
       setData(sendToDoData)
    },[sendToDoData])
   
   
    const handleDelete=(key)=>{
        const remove = data.filter((value,index)=>{
            return(
                index !== key
            )
        })
        handlePageDelte(key)
        setData(remove)
    }


    const handleCompletedtask=(key)=>{
        const update = data[key];
        sendCompletedTask(update)
        const remove = data.filter((value,index)=>{
            return(
                index !== key
            )
        })
        setData(remove);
    }
  return (
    <div>
        <p>ToDo</p>
        <div>
        {
            data.map((obj,key)=>{
                return(
                    <div>
                        {obj}
                        <button onClick={()=>handleCompletedtask(key)}>completed</button>
                        <button onClick={()=>handleDelete(key)}>delete</button>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default ToDoTask