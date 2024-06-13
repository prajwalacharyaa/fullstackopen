import { useState, useEffect } from 'react'
import Note from './components/Note'
import noteService from './services/notes'
import './index.css'


const Notification = ({ message }) => {
    if (message === null) {
        return null
    }
    return (
        <div className='error'>
            {message}
        </div>
    )
}

const Footer = () => {
    const footerStyle = {
        color: 'green',
        fontStyle: 'italic',
        fontSize: 16
    }
    return (
        <div style={footerStyle}>
            <br />
            <em>Note app, Department of Computer Science, University of Helsinki 2024</em>
        </div>
    )
}


const App = () => {
    const [notes, setNotes] = useState(null)
    const [newNote, setNewNote] = useState('a new note is here...')
    const [showAll, setShowAll] = useState(true)
    const [errorMessage, setErrorMessage] = useState('some error happened...')

    // useEffect(() => {
    //     console.log('effect')

    //     const eventHandler = response => {
    //         console.log('promise fullfilled')
    //         setNotes(response.data)
    //     }
    //     const promise = axios.get('http://localhost:3001/notes')
    //     promise.then(eventHandler)
    // }, [])
    useEffect(() => {
        noteService
            .getAll()
            .then(response => {
                setNotes(response)
            })
    }, [])

    if (!notes) {
        return null
    }


    // console.log('render', notes.length, 'notes')

    const toggleImportanceOf = (id) => {
        //   const url = `http://localhost:3001/notes/${id}`
        const note = notes.find(n => n.id == id)
        const changeNote = { ...note, important: !note.important }
        noteService
            .update(id, changeNote)
            .then(response => {
                setNotes(notes.map(note => note.id !== id ? note : response.data))
            }).catch(error => {
                setErrorMessage(
                    `Note '${note.content}' was already removed from server`
                )
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)
                setNotes(notes.filter(n => n.id !== id))
            })

    }

    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            important: Math.random() < 0.5,
            id: `${notes.length + 1}`,
        }
        noteService
            .create(noteObject)
            .then(response => {
                setNotes(notes.concat(response.data))
                setNewNote('')
            })
        // axios
        //     .post('http://localhost:3001/notes', noteObject)
        //     .then(response => {
        //         setNotes(notes.concat(response.data))
        //         setNewNote('')
        //     })
        // setNotes(notes.concat(noteObject))
        // setNewNote('')
    }
    const handleNoteChange = (event) => {
        //   console.log(event.target.value)
        setNewNote(event.target.value)
    }

    const notesToShow = showAll
        ? notes
        : notes.filter(note => note.important
        )


    return (
        <div>
            <h1>Notes</h1>
            <Notification message={errorMessage} />
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all'}
                </button>
            </div>
            <ul>
                {/* {notesToShow.map(note =>
                    <Note key={note.id} note={note} />
                )} */}
                {notesToShow.map(note =>
                    <Note
                        key={note.id}
                        note={note}
                        toggleImportance={() => toggleImportanceOf(note.id)}

                    />
                )}
            </ul>
            <form onSubmit={addNote}>
                <input value={newNote}
                    onChange={handleNoteChange}
                />
                <button type='submit'>Save</button>
            </form>
            <Footer />
        </div>
    )
}

export default App 