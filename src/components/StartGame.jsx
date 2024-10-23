import styled from 'styled-components'

function StartGame({toggle}) {
    return (
        <Container>
            <div>
                <img src="/image/dices.png" alt="" />
            </div>

            <div className='content'>
                <h1>DICE GAME</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>

        </Container>
    )
}

export default StartGame

const Container = styled.div`
max-width : 1180px;
height: 80vh;
display: flex;
margin: 0px auto;
border: 2px solid black;
align-items: center;
/*max-height: 520px;
justify-content: center; */

.content{
    h1{
        font-size: 96px;
        white-space: nowrap;
    }
}

`;

const Button = styled.button`
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

`