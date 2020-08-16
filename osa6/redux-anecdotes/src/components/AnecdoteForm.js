import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const create = (event) => {
    dispatch(createAnecdote(event))
  }

  return (
  <div>
    <h2>create new</h2>
    <form onSubmit={create}>
      <div><input name="anecdote" /></div>
      <button>create</button>
    </form>
  </div>
  )
}

export default AnecdoteForm