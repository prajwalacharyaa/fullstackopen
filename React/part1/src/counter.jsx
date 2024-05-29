import { useState } from "react"

const App = () => {
    const [counter, setCounter] = useState(0)

    const handleClick = () => {
        console.log('clicked')
    }

    // setTimeout(
    //     () => setCounter(counter + 1), 1000
    // )

    // console.log('rendering...', counter)

    return (
        <div>
        {counter}
            <br></br>
            <button onClick={() => setCounter(counter + 1)}>
                plus
            </button>
            <button onClick={() => setCounter(0)}>
                Zero
            </button>
        </div>
    )
}
export default App