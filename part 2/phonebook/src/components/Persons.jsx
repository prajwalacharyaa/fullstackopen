const Persons = ({ persons }) => {
    //  console.log(persons)
    return (
        <div>
            {persons.name} {"  "}
            {persons.number}
        </div>
    )
}
 
export default Persons