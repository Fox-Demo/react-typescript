import React from 'react'
import { useState, useEffect } from 'react'

type Props = {

}

const Counter = (props: Props) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let id: NodeJS.Timer = setInterval(() => {
      setCount(count + 1);
    }, 500);
    return () => clearInterval(id);
  }, [count])

  return (
    <>
      <p>{count}</p>
    </>
  )
}

export default Counter