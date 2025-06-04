import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {getItems} from '../services/api'

function Read ()  {
  const[hilos,setHilos] = useState([])
  const queryData =async () =>{
    const data = await getItems()
    setHilos (data)
  }

  useEffect(()=>{
    queryData()
  },[])
  return (
    <div>
      {hilos.map((h)=>(
        <div key={h.id}>
          <span>
            <Link to={`/hilos/${h.id}`}>{h.name}</Link> 
          </span>
        </div>
      ))}

    </div>
  )
}

export default Read