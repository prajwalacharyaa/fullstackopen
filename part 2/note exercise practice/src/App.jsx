import { useState, useEffect } from 'react'
import Note from './components/Note'
import noteService from './services/notes'


const App = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('a new note is here...')
    const [showAll, setShowAll] = useState(true)

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
                setNotes(response.data)
            })
    }, [])
    //  console.log('effect')
    //     axios
    //         .get('http://localhost:3001/notes')
    //         .then(response => {
    //             console.log('promise fulfilled')
    //             setNotes(response.data)
    //         })


    // console.log('render', notes.length, 'notes')

    const toggleImportanceOf = (id) => {
        const url = `http://localhost:3001/notes/${id}`
        const note = notes.find(n => n.id == id)
        const changeNote = { ...note, important: !note.important }
        noteService
            .update(id, changeNote)
            .then(response => {
                setNotes(notes.map(note => note.id !== id ? note : response.data))
            })
        // axios
        //     .put(url, changeNote)
        //     .then(response => {
        //         setNotes(notes.map(note => note.id !== id ? note : response.data))
        //     })
        // console.log('importance of' + id + 'needs to be toggled')
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
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all'}
                </button>
            </div>
            <ul>
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
        </div>
    )
}

export default App 