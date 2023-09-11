import '../Form/Form.css'
import { useState } from 'react'

function Form({ newReservation }) {
    const [nameInput, setNameInput] = useState()
    const [dateInput, setDateInput] = useState()
    const [timeInput, setTimeInput] = useState()

    const name = (event) => {
        setNameInput(event.target.value)
    }

    const date = (event) => {
        setDateInput(event.target.value)
    }

    const time = (event) => {
        setTimeInput(event.target.value)
    }

    return (
        <form>
            <input type='text' placeholder='Name' value={nameInput} onChange={name} required></input>
            <input type='date' placeholder='Date (mm/dd)' value={dateInput} onChange={date} required></input>
            <input type='time' placeholder='Time' value={timeInput} onChange={time} required></input>
            <button onClick={() => {newReservation()}}>Make Reservation</button>
        </form>
    )
}

export default Form