import { useState } from "react"

const App = () => {
    const [clicks, setClicks] = useState({
        left: 0, right: 0
    })

    const handleLeftClick = () => {
        const newClicks = {
            left: clicks.left + 1,
            right: clicks.right
        }
        setClicks(newClicks)
    }

    const handleRightClick = () => {
        const newClicks = {
            left: clicks.left,
            right: clicks.right + 1
        }
        setClicks(newClicks)
    }

    return (
        <div>
            {clicks.left} ------ {clicks.right}
            <br></br>
            <button onClick={handleLeftClick}>
                left
            </button>
            <button onClick={handleRightClick}>
                Right
            </button>

        </div>
    )
}

export default App