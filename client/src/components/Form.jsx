import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Candidates from './Candidates';

export default function Form() {
  const [candidatesData, setCandidatesData] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    let name = inputName.current.value;
    let age = inputAge.current.value;

    try {
      axios.post(`${process.env.REACT_APP_API_URL}api/candidate`, {
        name, age
      })
      .then((docs) => {        
        const newCandidate = docs.data;
        setCandidatesData((candidatesData) => [...candidatesData, newCandidate])
        inputName.current.value = "";
        inputAge.current.value = 12;
      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    axios
  .get(`${process.env.REACT_APP_API_URL}api/candidate`)
  .then((res) => setCandidatesData(res.data))
  .catch((error) => console.log(error));
  }, [])

  return (
    <div className='form'>
      <div className="form-container">

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nom de l'Argonaute</label>
        <input type="text" id='name' placeholder='Nom du candidat' ref={inputName}/>
        <label htmlFor="age">Age de l'Argonaute :</label>
        <input type="number" id="age" defaultValue={12} min={12} max={50} ref={inputAge}/>
        <input type="submit" value="Ajouter" />
      </form>      
      </div>
      <Candidates candidates={candidatesData} />      
    </div>
  )
}
