import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { useState } from 'react'
import { generateWorkout } from './utils/function'

function App() {

  const [workout, setWorkout] = useState(null)
  const [poison, setPoision] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState('strength_power')
  
  function updateWorkout() {
    if (muscles.length < 1) {
      return
    }
    const newWorkout = generateWorkout({ poison, muscles, goal });
    setWorkout(newWorkout)

    window.location.href = '#workout'
  }

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white'>
      <Hero/>
      <Generator 
      poison={poison} 
      setPoision={setPoision} 
      muscles={muscles} 
      setMuscles={setMuscles} 
      goal={goal} 
      setGoal={setGoal}
      updateWorkout={updateWorkout} />

      {workout && (<Workout workout={workout}/>)}           
    </main>
  )
}

export default App
