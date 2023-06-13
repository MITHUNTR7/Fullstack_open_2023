import { useState } from 'react'



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>give feedback</h1>


      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>nuetral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

const Statistics = ({ good, neutral, bad }) => {

  const average = (good, neutral, bad) => {
    const total = good + neutral + bad
    return (good * 1 + neutral * 0 + bad * (-1)) / total
  }
  const positive = (good, neutral, bad) => {
    const total = good + neutral + bad
    return `${good * 100 / total}%`
  }

  return (
    <>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {good + neutral + bad && average(good, neutral, bad)}</p>
      <p>positive {(good + neutral + bad) && positive(good, neutral, bad)}</p>
    </>



  )


}






export default App