import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/css/app.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import TradeTable from './components/TradeTable'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Container className="p-3">
        <Jumbotron>
          <TradeTable></TradeTable>
        </Jumbotron>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default App;
