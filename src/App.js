import { Container } from 'react-bootstrap'


import Header from './components/Headers'
import Footer from './components/Footers'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <div>
      <Header />
    <main>
      <Container>
      <HomeScreen />
      </Container>

    </main>
     <Footer />
    </div>
  );
}

export default App;
