import React from 'react';
import Counter from './components/Counter';
import IncreaseCounter from './components/IncreaseCounter';
import DecreaseCounter from './components/DecreaseCounter';
import IncreaseByTwoCounter from './components/IncreaseByTwoCounter';
import { Row} from "reactstrap";
import MultiplyCounter from './components/MultiplyCounter';
import DivideWithFive from './components/DivideWithFive';

function App() {
  return (
    <div>
      <center>
        <h1>Counter</h1>
      </center>
      <Row>
        <Counter />
        <IncreaseCounter/>
        <DecreaseCounter/>
        <IncreaseByTwoCounter/>
        <MultiplyCounter/>
        <DivideWithFive/>
      </Row>
    </div>
  );
}

export default App;

