import styled from 'styled-components'

function NumberSelector({selectedNumber,setError,error,setSelectedNumber}) {
    let array = [1, 2, 3, 4, 5, 6]

    const numberSelectorHandler=(value)=>{
        setSelectedNumber(value)
        setError('')
    }
    return (
        <NumberSelectorContainer>
            <p className='error'>{error}</p>
            <div className='flex'>
                {
                    array.map((value, i) => (
                        <Box isSelected={value === selectedNumber} key={i} onClick={() => numberSelectorHandler(value)}>{value}</Box>
                    ))
                }
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>
    )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
margin: 35px 30px;
max-width: 600px;
display: flex;
flex-direction: column;
align-items: end;
.flex{
    display: flex;  
    gap  :16px ;
}
p{
    font-size: 24px;
    font-weight: 700;
}    
.error{
    color: red;
}
`

const Box = styled.div`
    height: 70px;
    width: 70px;
    display: grid;
    place-items: center;
    background-color: ${(props) => (props.isSelected ? "rgb(2, 61, 66)" : "rgb(63, 115, 119)")};
    border: 5px solid rgb(1, 32, 35) ;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 700;
`
