import { parse } from 'mathjs'
import React, { useState } from 'react'

function ConvertsToBinary() {
    const [number,setNumber] = useState(0)

    const value = parseInt(number)

    const result = value.toString(2);

    return (
        <div>
            <label>
                Put a number and see binary representation below
                <br></br>
            <input type="number" onChange={event => setNumber(event.target.value)}></input>
            </label>
            <div>
                {result}
            </div>
        </div>
    )
}

export default ConvertsToBinary