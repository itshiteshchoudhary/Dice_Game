import styled from 'styled-components'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'
import { useState } from 'react'

function GamePlay() {
    let [error, setError] = useState("")
    let [score, setScore] = useState(0)
    let [currentDice, setCurrentDice] = useState(1)
    let [selectedNumber, setSelectedNumber] = useState()


    const generateRendomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }
    const RoleDice = () => {
        const rendomNumber = generateRendomNumber(1, 7)
        if (!selectedNumber) {
            setError("You have not selected any number")
            return
        }

        setCurrentDice(rendomNumber)
        setSelectedNumber(undefined)

        if (selectedNumber === rendomNumber) {
            setScore((prev) => prev + rendomNumber)
        } else {
            setScore((prev) => prev - 2)
        }
    }

    const handelResat=()=>{
        setScore((prev)=>0)
    }

    return (
        <div >
            <Comp className='flex'>
                <TotalScore score={score} />
                <NumberSelector setError={setError} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
            </Comp>
            <RollDice RoleDice={RoleDice} currentDice={currentDice} setCurrentDice={setCurrentDice} />
            <Showbtn className="rest">
                <button onClick={handelResat}>Reset Score</button>
                <button>Show Rules</button>
            </Showbtn>
        </div>
    )
}

export default GamePlay

const Comp = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const Showbtn= styled.div`
display: flex;
flex-direction: column;
gap: 10px;
align-items: center;
button{
    font-size: 18px;
    max-width: 90px;
    color: white;
    padding: 10px 18px;
    background-color: black;
    border-radius: 5px;
    min-width: 220px;
    border: 1px solid transparent;
    transition: 0.4s ease-in;
    &:hover{
        border: 1px solid black;
        border-radius: 5px;
        background-color: white;
        color: black;
        transition: 0.4s ease-in;
    }
    
}
    
`





