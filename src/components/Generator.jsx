import React, { useState } from 'react'
import SelectionWrapper from './SelectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/swoldier'
import Button from './Button'

function Header(props) {
  const { index, title, description } = props
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-center gap-2'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
        <p className='text-xl sm:text-2xl md:text-3xl'>{title}</p>
      </div>
      <p className='text-sm sm:text-base mx-auto'>{description}</p>
    </div>
  )
}

function Generator(props) {
  const [showModal, setShowModal] = useState(false)

  const {muscles, setMuscles, poison, setPoision, goal, setGoal, updateWorkout} = props


  function toggleModal() {
    setShowModal(!showModal)
  }

  function updateMuscles(muscleGroup) {
    

    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter(val => val !== muscleGroup))
      return
    }

    if (muscles.length > 2) {
      return
    }

    if (poison !== 'individual') {
      setMuscles([muscleGroup])
      setShowModal(false)
      return
    }

    setMuscles([...muscles, muscleGroup])

    if(muscles.length === 2) {
      setShowModal(false)
      return
    }
  }


  return (
    <SelectionWrapper id={'generate'} header={'generate your workout'} title={['It\'s', 'Huge', 'o\'clock']}>
      <Header index={'01'} title={'Pick your poison'} description={'Select the workout you wish to endure'} />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button onClick={
              () => {
                setMuscles([])
                setPoision(type)
              }
            }
              key={typeIndex}
              className={"bg-slate-950 text-white border border-blue-400 duration-200 hover:border-blue-600 px-4 py-3 rounded-lg "     +  (type === poison ? 'border-blue-400 rounded-lg' : 'border-blue-600')}
            >
              <p className='capitalize'>{type.replaceAll(
                '_',' '
              )}</p>
            </button>
          )
        })}
      </div>

      <Header index={'02'} title={'Lock on Targets'} description={'Select the muscles judged for annihilation'} />

      <div className="bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col">
        <button onClick={toggleModal} className='relative p-3 flex items-center justify-center'>
          <p className='capitalize'>{muscles.length === 0 ? 'Select muscles group' : muscles.join(' ')}</p>
          <i className=" absolute right-3 top-1/2 -translate-y-1/2 fa-solid fa-caret-down"></i>
        </button>
        { showModal && (
          <div className='flex flex-col px-3 pb-3 '>
            {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button onClick={
                  () => {
                    updateMuscles(muscleGroup)
                  }
                } className={'hover:text-blue-400 duration-200' + ( muscles.includes(muscleGroup) ? ' text-blue-400' : '' )} key={muscleGroupIndex}>
                  <p className='uppercase'>{muscleGroup.replaceAll('_', ' ')}</p>
                </button>
              )
            })}
          </div>
        
        )}
      </div>

      <Header index={'03'} title={'Become Juggernaut'} description={'Select your ultimate objective'} />
      <div className=" grid grid-cols-1  sm:grid-cols-3 gap-4 p-4 ">
      {Object.keys(SCHEMES).map((schemes, schemesIndex) => {
          return (
            <button onClick={
              () => {
                setGoal(schemes)
              }
            }
              key={schemesIndex}
              className={"bg-slate-950 text-white px-4 border border-blue-400 duration-200 hover:border-blue-600 py-3 rounded-lg " +  (schemes === goal ? 'border-blue-400 rounded-lg' : 'border-blue-600')}
            >
              <p className='capitalize'>{schemes.replaceAll(
                '_',' '
              )}</p>
            </button>
          )
        })}
      </div>

      
      <Button text={'Formulate'} func={updateWorkout} />

    </SelectionWrapper>
  )
}

export default Generator
