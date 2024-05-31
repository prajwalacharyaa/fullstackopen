import { useState } from "react";

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }
    return (
        <div>
            button press history:{props.allClicks.join('')}
        </div>

    )
}

const Button = ({ handleClick, text }) => (
    //here retun is not used because it is single line ccode
    //and is written between (these brackets)
    //if {curly brackets} were used we hadd no option but to use return to
    //make the button display
    <button onClick={handleClick}>
        {text}
    </button>


)


const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])
    const [total, setTotal] = useState(0)

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        //   console.log('Left before', left)
        const updatedLeft = left + 1
        setLeft(updatedLeft)
        // console.log('left after', left)
        setTotal(updatedLeft + right)
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        const updatedright = right + 1
        setRight(updatedright)
        setTotal(left + updatedright)
    }

    return (
        <div>
            {left}
            <Button handleClick={handleLeftClick} text='left' />
            <Button handleClick={handleRightClick} text='Right' />
            {right}
            <p>Total: {total}</p>

            <History allClicks={allClicks} />
        </div>
    )
}

export default App