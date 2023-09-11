import '../AllRes/AllReservations.css'
import Card from '../ResCard/Card'

function AllReservations( {reservations} ) {
    console.log("ALLRES", reservations)
    const reservationCard = reservations.map(res => {
        return (
            <Card
              id={res.id}
              name={res.name}
              date={res.date}
              time={res.time}
              number={res.number}
              key={res.id}
            />
        )
    })

    return (
        <div className="all-reservations">
            {reservationCard}
        </div>
    )
}

export default AllReservations