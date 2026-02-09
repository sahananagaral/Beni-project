import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./style.css"

const App = () => {
  const[fact,setFact]=useState([])

  useEffect(()=>{
    let fetching=async()=>{
      const response=await fetch("https://fullstackproject-m9rj.onrender.com/api/facts")
      const data=await response.json()
      setFact(data)
    }
    fetching()
  },[])
  return (
    <div className='container'>
      <h1>Facts App</h1>
      <ul>
    {
      fact.map((x)=>{
        console.log(x)
        return(
          <li key={x.id}>{x.fact}</li>
        )
      })
    }
    </ul>
    </div>
  )
}

export default App
