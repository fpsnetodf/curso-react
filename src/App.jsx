// https://www.youtube.com/watch?v=ErjWNvP6mko&t=499s
import { useState } from 'react'
import { Titulo } from '../components/Titulo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <div className=''>
       <Titulo msg={"Curso de react"} />
    </div>
    </div>
  )
}
export default App
