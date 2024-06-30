import { BrowserRouter, Link } from "react-router-dom"

const Anecdote = ({ anecdote }) => {
    return (
        <div>
            <h2>{anecdote.content}</h2>
            <p>has {anecdote.votes}</p>
        </div>
    )
}

const AnecdoteList = ({ anecdotes, notification }) => (
    <div>
        <Notification notification={notification} />
        <h2>Anecdotes</h2>
        <ul>
            {anecdotes.map(anecdote => <li key={anecdote.id}>
                <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content} </Link>
            </li>
            )}
        </ul>
    </div>
)



const Notification = ({ notification }) => {
    if (!notification) {
        return null
    }

    return (
        <div>{notification}</div>
    )
}

export { Anecdote, AnecdoteList }