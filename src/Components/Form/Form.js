import '../Form/Form.css'

function Form() {

    return (
        <form>
            <input type='text' placeholder='Name' required></input>
            <input type='date' placeholder='Date (mm/dd)' required></input>
            <input type='time' placeholder='Time' required></input>
            <button>Make Reservation</button>
        </form>
    )
}

export default Form