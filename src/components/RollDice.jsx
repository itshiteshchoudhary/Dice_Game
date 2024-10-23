import styled from 'styled-components'

function RollDice({currentDice,RoleDice}) {    

    return (
        <div>
            <PutImg>
                <div onClick={RoleDice}>
                    <img src={`/public/dice/dice_${currentDice}.png`} alt="rolling dice" />
                </div>
                <p>Click On Dice To Roll</p>
            </PutImg>

        </div>
    )
}

export default RollDice

const PutImg = styled.div`
margin-top:48px ;
display: flex;
flex-direction: column;
align-items: center;
p{
    font-size: 22px;
    font-weight: 600;
}
    
`