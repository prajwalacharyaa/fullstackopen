import { useState } from 'react'


const Anecdote = ({ text, votes }) => {
  return (
    <div>
      <p>{text}</p>
      <p>has {votes} votes</p>
    </div>
  )
}
const Button = ({ ratebutton, text }) => (
  <button onClick={ratebutton}>
    {text}
  </button>
)

const StatisticLine = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            {props.text}
          </td>
          <td>{props.value}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const positivePercentage = (props.good / props.all) * 100
  const average = (props.good - props.bad) / all

  const feedback = () => {
    if (all === 0) {
      return (<div><h3>No feedback given</h3></div>);
    } else {
      return (
        <div>
          <StatisticLine text="good " value={props.good} />
          <StatisticLine text="neutral " value={props.neutral} />
          <StatisticLine text="bad " value={props.bad} />
          <StatisticLine text="average " value={average} />
          <StatisticLine text="positive " value={positivePercentage} />

        </div>

      )
    }
  };

  return (

    <div>
      <h1>Statistics</h1>
      {feedback()}
    </div>
  )

}

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([1, 3, 5, 3, 4, 2, 3])


  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    handleAllClick()

  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    handleAllClick()
  }
  const handleBadClick = () => {
    const updatedBad = bad + 1
    handleAllClick()
    setBad(updatedBad)

  }

  const handleAllClick = () => {
    const updatedAll = all + 1
    setAll(updatedAll)
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const handeAnecdotes = () => {
    let randomnumber = getRandomInt(7)
    setSelected(randomnumber)

  }

  const handelAnecdotesVote = () => {
    //console.log(votes[selected])
    const updatedVotes = [...votes]
    updatedVotes[selected] += 1
    setVotes(updatedVotes)
    //console.log(updatedVotes)
  }

  const mostVotedIndex = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote text={anecdotes[selected]}
        votes={votes[selected]} />

      <Button ratebutton={handelAnecdotesVote} text={'Vote'} />
      <Button ratebutton={handeAnecdotes} text={'next anecdote'} />
      <br></br>
      <h1>Anecdote with most votes</h1>
      <Anecdote text={anecdotes[mostVotedIndex]}
        votes={votes[mostVotedIndex]}
      />
      <br></br>
      <h1>give feedback</h1>
      <Button ratebutton={handleGoodClick} text={'good'} />
      <Button ratebutton={handleNeutralClick} text={'neutral'} />
      <Button ratebutton={handleBadClick} text={'bad'} /><br></br>



      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

export default App