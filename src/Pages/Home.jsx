import React, { useState } from 'react'
import { Button } from "@/components/ui/button"

const Home = () => {
  const [count, setCount] = useState(0)
  
  const increase= () => {
      setCount((prev)=>prev + 1) 
  }
  const decrease = () => {
    count > 0? setCount((prev) => prev - 1): setCount(0)
  }

  const reset = () => {
    setCount(0)
  }
  
  return (
    <>
    <center>
    <h1>Counter</h1>
    
    <br />
    
    <h2>{count}</h2>
    
    <br />
    
    <Button onClick={increase}> + </Button>
    
    <br />
    
    <Button onClick={decrease}> - </Button>

    <br />

    <Button onClick={reset}> Reset </Button>

    </center>
    </>
  )
}

export default Home