import '../ResCard/Card.css'
import { useState, useEffect } from 'react'

function Card({ reservations }) {
    const [singleReservation, setSingleReservation] = useState()

    // const res = reservations.map(data => setSingleReservation(data))
    // console.log(singleReservation)

    useEffect(() => {
        reservations.map(data => setSingleReservation(data))
        console.log(singleReservation)
    }, [])

    return (
        <div className="card">
            <div className="reservation-info">
                {singleReservation}
                <button>Cancel</button>
            </div>
        </div>
    )
}

export default Card