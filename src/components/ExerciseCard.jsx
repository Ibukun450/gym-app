import React, { useState } from 'react';

function ExerciseCard({ exercise, index }) {
  const [setsCompleted, setSetsComplete] = useState(0);

  function handleSetIncrement() {
    setSetsComplete((prevSetsCompleted) => (prevSetsCompleted + 1) % 5);
  }

  return (
    <div className='p-4 rounded-md flex flex-col gap-4 bg-slate-950 sm:flex-wrap border border-slate-800 shadow-md hover:bg-slate-900 hover:shadow-lg transition-all'>
      <div className='flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4'>
        <h4 className='text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-slate-400'>
          {index < 9 ? `0${index + 1}` : index + 1}
        </h4>

        {/* Debugging: Log the index value */}
        {console.log(index)}

        <h2 className='capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 md:text-center'>
          {exercise.name.replaceAll("_", " ")}
        </h2>

        <p className="text-sm text-slate-400 capitalize">
          {exercise.type}
        </p>
      </div>

      <div className="flex flex-col">
        <h3 className='text-slate-400 text-sm'>Muscles Groups</h3>
        <p className='capitalize'>{exercise.muscles.join(' & ')}</p>
      </div>

      <div className="flex flex-col bg-slate-950 rounded p-2 gap-2">
      {
      exercise.description.split('___').map((val) =>{
        return (
          <div className="text-sm">
            {val}
          </div>
        )
      }
      )
      }
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-2">
        {['reps', 'rest', 'tempo'].map(info => (
          <div className='flex flex-col p-2 rounded border-[1.5px] border-solid border-slate-900 w-full' key={info}>
            <h3 className='capitalize text-slate-400 text-sm'>{info === 'reps' ? `${exercise.unit}` : info}</h3>
            <p className='font-medium'>{exercise[info]}</p>
          </div>
        ))}
      </div>

      <button onClick={ handleSetIncrement } className='flex flex-col p-2 rounded border-[1.5px] duration-200 border-solid border-blue-900 hover:border-blue-600 w-full'>
        <h3 className='text-slate-400 text-sm capitalize'>Sets</h3>
        <p className="font-medium">{setsCompleted} / 5</p>
      </button>
    </div>
  );
}

export default ExerciseCard;
