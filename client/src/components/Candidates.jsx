import React from 'react'
import CandidateCard from './CandidateCard'

export default function Candidates({candidates}) {
  return (
    <div className="candidates">

        <h3>Membres de l'équipage</h3>
    <ul className='candidates-container'>
        {candidates.map(candidate => <CandidateCard key={candidate._id} candidate={candidate}/>)}
    </ul>
    </div>
  )
}
