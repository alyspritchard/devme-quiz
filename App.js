import React from 'react';

import Multiplier from './Multiplier';
import EvenClicks from './EvenClicks';


let App = () => (
  <>
    <h1>Quizzzz</h1>
    <Multiplier x={ 10 } y={ 7 } />
    <EvenClicks />
  </>
);

export default App;
