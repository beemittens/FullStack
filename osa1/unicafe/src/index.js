import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Feedback = () => {
  return (
    <div>
      <h1>give feedback</h1>
    </div>
  )
}
const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}: </td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {

  const total = good + neutral + bad

  if(total === 0)
  {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  const average = (good - bad) / total
  
  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value = {good} />
          <StatisticLine text="neutral" value = {neutral} />
          <StatisticLine text="bad" value = {bad} />
        </tbody>
      </table>
      <div>
        <div>all: {total}</div>
        <div>average: {average}</div>
        <div>positive: {100 * good / total} %</div>
      </div>
    </>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (value, setValue) => () => { setValue(value) } 

  return (
    <>
      <Feedback /> 
      <Button handleClick={handleClick(good + 1, setGood)} text='good' />
      <Button handleClick={handleClick(neutral + 1, setNeutral)} text='neutral' />
      <Button handleClick={handleClick(bad + 1, setBad)} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} /> 
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)