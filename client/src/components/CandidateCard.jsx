import React from 'react'

export default function CandidateCard({candidate}) {
    const {name, age} = candidate;

  return (
    <li className='candidate-card'>
        <h4>{name}</h4>
        <p>Agé de {age} ans</p>
    </li>
  )
}
