import { useState } from 'react'
import './App.css'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Anecdote = ({ text, value }) => {
  return (
    <div>
      <div>
        {text}
      </div>
      <div>
        has {value} votes
      </div>
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
  
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const [selected, setSelected] = useState(0)
  const [best, setBest] = useState(0)

  const getRandom = () => {
    const random = Math.floor(Math.random() * 8)
    setSelected(random)
  }

  const voteAnecdote = () => {
    const newVotes = [ ...votes ]
    newVotes[selected] += 1
    setVotes(newVotes)

    const maxVotes = newVotes.indexOf(Math.max(...newVotes))
    setBest(maxVotes)
  }

  return (
    <div>
      <h2>
        Anecdote of the day
      </h2>
      <Anecdote text={anecdotes[selected]} value={votes[selected]} />
      <div>
        <Button handleClick={voteAnecdote} text='vote' />
        <Button handleClick={getRandom} text='next anecdote' />
      </div>
      <h2>
        Anecdote with most votes
      </h2>
      <Anecdote text={anecdotes[best]} value={votes[best]} />
    </div>
  )
}

export default App