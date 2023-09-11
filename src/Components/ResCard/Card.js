import '../ResCard/Card.css'
// import { useState, useEffect } from 'react'

function Card(props) {

    return (
        <div className="card">
            <div className="reservation-info">
                {props.name} <br />
                {props.date} <br />
                {props.time} <br />
                Number of guests:{props.number}
                <button>Cancel</button>
            </div>
        </div>
    )
}

export default Card