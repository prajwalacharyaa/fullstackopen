import { useState } from "react"

const App = () => {
    const [value, setValue] = useState('Hello World')

    const hello = (who) => () => {
        //     const handler = () => {
        //         setValue("Hello" + " " + who)
        //         console.log('hello', who)
        //     }
        //     return handler
        setValue("Hello" + " " + who)
        console.log("Hello" + " " + who)
        console.log("Hello" + " " + who)
    }

    return (

        <div>
            {value}
            <br></br>
            <button onClick={hello('World')}>Change to World</button>
            <button onClick={hello('React')}>Change to React</button>

        </div>
    )
}



export default App