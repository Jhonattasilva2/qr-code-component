import styled from 'styled-components'
import QrDiv from './components/QrDiv';

function App() {
  return (
    <Container>
      <QrDiv />
    </Container>
  );
}

const Container = styled.div`
width: 100vw;
height: 100vh;
background-color: hsl(212, 45%, 89%);
display: flex;
justify-content: center;
align-items: center;
`

export default App;
