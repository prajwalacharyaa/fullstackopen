import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const notes = [
    {
        id: 1,
        content: 'Browser can execute only JavaScript',
        important: true
    },
    {
        id: 2,
        content: 'Browser can execute only JavaScript',
        important: false
    },
    {
        id: 3,
        content: 'GET and POST are the most important methods of HTTP proptocol',
        important: false
    },

]

ReactDOM.createRoot(document.getElementById('root')).render(
    <App notes={notes}/>
)
