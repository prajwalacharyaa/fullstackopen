import { BrowserRouter, useNavigate } from "react-router-dom"
import { useState } from "react"

const useField = (type, name) => {
    const [value, setValue] = useState('')

    const onChange = (e) => {
        setValue(e.target.value)
    }

    return {
        input: {
            name,
            type,
            value,
            onChange,
        },
        reset: () => setValue('')
    }
}

const CreateNew = (props) => {

    const content = useField('text', 'content')
    const author = useField('text', 'author')
    const info = useField('text', 'url for more info')



    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addNew({
            content: content.input.value,
            author: author.input.value,
            info: info.input.value,
            votes: 0
        })
        navigate('/')
    }

    const handelReset = (e) => {
        e.preventDefault()
        content.reset()
        author.reset()
        info.reset()

    }

    return (
        <div>
            <h2>create a new anecdote</h2>
            <form >
                <div>
                    {content.input.name}
                    <input {...content.input} />
                </div>
                <div>
                    {author.input.name}
                    <input {...author.input} />
                </div>
                <div>
                    {info.input.name}
                    <input {...info.input} />
                </div>
                <button onClick={handleSubmit}>create</button>
                <button onClick={handelReset}>reset</button>
            </form>
        </div>
    )

}

export default CreateNew