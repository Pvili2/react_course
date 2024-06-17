import React, { useState } from 'react'
import Output from './Output'
function Greeting() {
    const [changedText, setChangedText] = useState(false)

    const handleClick = () => {
        setChangedText(true)
    }
    return (
        <div>
            <h2>Hello World!</h2>
            {
                !changedText ? <Output>It's good to see you!</Output> : <Output>Changed!</Output>
            }
            <button onClick={handleClick}>Changed Text!</button>
        </div>
    )
}

export default Greeting