import { useState } from 'react'


const Button = ({ ratebutton, text }) => (
  <button onClick={ratebutton}>
    {text}
  </button>
)

const StatisticLine = (props) => {
  return (
    <div>
      {props.text}
      {props.value}
    </div>
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

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

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



  return (
    <div>
      <h1>give feedback</h1>
      <Button ratebutton={handleGoodClick} text={'good'} />
      <Button ratebutton={handleNeutralClick} text={'neutral'} />
      <Button ratebutton={handleBadClick} text={'bad'} />


      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

export default App