import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import TradeTable from './components/TradeTable'
import '../src/css/app.css';

function App() {
  return (
    <Container className="p-3">
      <Jumbotron>
         <TradeTable></TradeTable>
      </Jumbotron>
    </Container>
  );
}

export default App;
