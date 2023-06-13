import { useState } from 'react'



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>

      <Button name="good" handler={handleGoodClick}/>
      <Button name="neutral" handler={handleNeutralClick}/>
      <Button name="bad" handler={handleBadClick}/>
     

      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

const StatisticLine = ({text, value}) => {

  return(
    <p> { text } { value } </p>
  )
}
const Button = ({name, handler})=>{
  
  return(
    <button onClick={handler}>{name}</button>
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
  
  
  const total = good + neutral + bad
  
  
  if (!total) {
    return (
      <div>
        <h1>statistics</h1>
        No feedbacks given

      </div>
    )
  }
  return (
    <>
      <h1>statistics</h1>

      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      
      <StatisticLine text="all" value={good + neutral + bad} />
      
      <StatisticLine text="average" value={average(good, neutral, bad)} />
      <StatisticLine text="positive" value={positive(good, neutral, bad)} />

    </>

  )
}






export default App