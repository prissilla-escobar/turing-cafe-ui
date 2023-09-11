export function getReservations() {
    return fetch('http://localhost:3001/api/v1/reservations')
    .then(response => {return response.json()})
}