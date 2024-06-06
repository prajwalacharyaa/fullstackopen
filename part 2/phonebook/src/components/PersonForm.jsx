const PersonForm = ({ nameInputChange, numberInputChange, newPerson, newNumber, buttonAddClick }) => {
    return (

        <form>
            <div> Name: <input onChange={nameInputChange} value={newPerson} /></div>
            <div>Number: <input onChange={numberInputChange} value={newNumber} /></div>
            <br></br>
            <div>
                <button type="submit" onClick={buttonAddClick}>
                    Add
                </button>
            </div>
        </form>
    )

}

export default PersonForm