import { useState } from "react";

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
            <button onClick={handleLeftClick}>left</button>
            <button onClick={handleRightClick}>right</button>
            {right}
            <p>Total {total} </p>

            <p>{allClicks.join(' ')}</p>
        </div>
    )
}

export default App