const Persons = ({ persons, buttonClick }) => {
    //  console.log(persons)
    return (
        <div>
            {persons.name} {"  "}
            {persons.number}
            <Button text='delete' buttonClick={buttonClick}/>
        </div>
    )
}

const Button = ({ buttonClick, text }) => {
    return (
        <button onClick={buttonClick}>
            {text}
        </button>
    )

}

export default Persons