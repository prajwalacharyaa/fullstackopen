import { useState } from "react"

const App = () => {
    const [counter, setCounter] = useState(0)
    console.log('rendering with counter value', counter)

    const increaaasedByOne = () => {
        console.log('increasing, value before', counter)
        setCounter(counter + 1)
    }

    const decreaseByOne = () => {
        console.log('decreasing value before', counter)
        setCounter(counter - 1)
    }

    const setToZero = () => setCounter(0)

    // const handleClick = () => {
    //     console.log('clicked')
    // }
    // setTimeout(
    //     () => setCounter(counter + 1), 1000
    // )

    // console.log('rendering...', counter)

    return (
        <div>
            <Display counter={counter} />
            <br></br>
            <Button onClick={increaaasedByOne}
                text='Plus'
            />

            <Button
                onClick={setToZero}
                text='Zero' />

            <Button
                onClick={decreaseByOne}
                text='minus' />

        </div>
    )
}

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => <button onClick={onClick}> {text} </button>

export default App