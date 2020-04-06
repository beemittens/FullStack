import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Votes = (props) => {
  return (
    <div>
      Has {props.votes} votes
    </div>
  )
}

const MostVoted = ({points, anecdotes}) => {
  const mostVotedIdx = points.indexOf(Math.max(...points))
  return (
    <div>
      <h2>Anecdote with most votes</h2>
      {anecdotes[mostVotedIdx]}
    </div>
  )
}

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const setToValue = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const increaseVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div>
      <div>{anecdotes[selected]}</div>
      <Votes votes={points[selected]} />
      <Button handleClick={increaseVote} text='vote' />
      <Button handleClick={setToValue} text='next anecdote' />
      <MostVoted points={points} anecdotes={anecdotes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)