import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Feedback = (props) => {
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

const Statistics = (props) => {

  const total = props.good + props.neutral + props.bad

  if(total === 0)
  {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  const average = (props.good - props.bad) / total
  
  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value = {props.good} />
          <StatisticLine text="neutral" value = {props.neutral} />
          <StatisticLine text="bad" value = {props.bad} />
        </tbody>
      </table>
      <div>
        <div>all: {total}</div>
        <div>average: {average}</div>
        <div>positive: {100 * props.good / total} %</div>
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