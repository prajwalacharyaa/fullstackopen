
const Hello = ({ name, age }) => {
  // const {name,age} = props
  const bornyear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old.</p>
      <p>So you were probably born in {bornyear()}</p>
    </div>
  )
}

const App = () => {
  const name = "john"
  const age = 12
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={name} age={age} />
    </div>
  )
}

export default App;
