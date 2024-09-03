import React from 'react'
import SelectionWrapper from './SelectionWrapper'
import ExerciseCard from './ExerciseCard'

function Workout(props) {
  const {workout} = props
  return (
    <SelectionWrapper id={'workout'} header={'Welecome to'} title={['The', 'DANGER', 'zone']}>
      <div className="flex flex-col gap-4">
        {workout.map((exercise, i) => {
          return(
            <ExerciseCard index={i} exercise={exercise} key={i}/>
          )
        })}
      </div>
    </SelectionWrapper>
  )
}

export default Workout