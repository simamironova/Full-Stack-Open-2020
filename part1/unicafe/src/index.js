import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Display = ({ counter }) => <h1>{counter}</h1>
const Statistic = ({text,value}) => (
  
  
     <tr>
       <td>{text}</td>
       <td>{value}</td>
     </tr>   
     
      
       )
      

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({good, neutral, bad}) => {

  const all = good+bad+neutral
  const average = (good-bad)/all
  const positive = good*100/all
  if (good !== 0 || neutral !== 0 || bad !== 0) {
    return (
      <>
        <h1>statistics</h1>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={all} />
        <Statistic text="average" value={average} />
        <Statistic text= "positive" value={positive+'%'}/> 
        
      </>
    );
  }

  return (
    <>
      <p>No feedback given</p>
    </>
  );
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <>
     <Display counter={"give feedback"} />
     <Button handleClick={increaseGood} text='good' />
     <Button handleClick={increaseNeutral} text='neutral' />   
     <Button handleClick={increaseBad} text='bad' />  
     
     <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)