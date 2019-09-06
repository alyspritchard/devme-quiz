import React from 'react';

import Multiplier from './Multiplier';
import EvenClicks from './EvenClicks';
import CountBy from './CountBy';


let App = () => (
  <>
    <h1>Quizzzz</h1>
    <Multiplier x={ 10 } y={ 7 } />
    <EvenClicks />
    <CountBy step={ 5 } />
  </>
);

export default App;
