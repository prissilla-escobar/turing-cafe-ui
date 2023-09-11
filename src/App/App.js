import './App.css';
import React from 'react';
import { getReservations } from '../api';
import { useState, useEffect } from 'react';
import AllReservations from '../Components/AllRes/AllReservations';
import Form from '../Components/Form/Form';

function App() {
  const [reservations, setReservations] = useState([])

  useEffect (() => {
    getReservations()
      .then(data => {
        setReservations(data)
      })
  }, [])


  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
      </div>
      <div className='resy-container'>
      </div>
      <Form />
      <AllReservations reservations={reservations} />
    </div>
  );
}

export default App; 