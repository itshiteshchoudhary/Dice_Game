import styled from 'styled-components'
function TotalScore({score}) {
  return (
    <ScroeContainer>
      <div>
        <h1>{score}</h1>
        <p>Total Score</p>
      </div>
    </ScroeContainer>
  )
}

export default TotalScore

const ScroeContainer = styled.div`
max-width: 200px;
text-align: center;
h1{
    font-size: 80px;
    font-weight: 700;
    margin: 0px;
};
p{
    font-size: 24px;
    font-weight: 700;
    margin: 0px;
}
    
`