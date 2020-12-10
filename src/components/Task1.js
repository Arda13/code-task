import React, { useState } from 'react'
import { median, typeOf } from 'mathjs'

function ReturnsMedian() {
    const [value,setValue] = useState('')
    const [medianVal,setMedianVal] =useState(0)

    function MedianFinder(e) {
        e.preventDefault();

        // TAKES INPUT AND TURNS INTO ARRAY OF NUMBERS
        const splittedArray = value.split(',').map(function(item) {
            return parseInt(item,10)
        })
        console.log(typeOf(splittedArray))
        console.log(splittedArray)
     
        // SHUFFLE FUNCTION
        function Shuffle(array) {
            for(let i = array.length - 1; i > 0; i--){
                const j = Math.floor(Math.random() * i)
                const temp = array[i]
                array[i] = array[j]
                array[j] = temp
              }
              return array;
        }
        
        // SHUFFLED ARRAY
        const shuffledArray = Shuffle(splittedArray)
        console.log(shuffledArray)

        // MEDIAN OF SHUFFLED ARRAY
        const medianOfArray = median(shuffledArray)
        console.log(medianOfArray)

        setMedianVal(medianOfArray)
     
        return medianOfArray;

        
    }

    return (
        <div>
           <form>
                <label>
                    Put numbers with coma "," and see median value below.
                    <br></br>
                    <input onChange={event => setValue(event.target.value)} type="text" name="median"/>
                </label>
                <input onClick={MedianFinder} type="submit" value="Submit" />
                <br></br>
                {medianVal}
            </form>
        </div>
    )
}


export default ReturnsMedian