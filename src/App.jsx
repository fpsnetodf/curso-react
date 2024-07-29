// https://www.youtube.com/watch?v=ErjWNvP6mko&t=499s
import { useState } from 'react'
import { Titulo } from '../components/Titulo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex w-full h-full justify-center">
      <div className='w-[500px] items-center'>
       <Titulo />
    </div>
    </div>
  )
}

export default App
