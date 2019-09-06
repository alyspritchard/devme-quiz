import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Multiplier from './Multiplier';
import EvenClicks from './EvenClicks';
import CountBy from './CountBy';
import HideMe from './HideMe';
import MinimumLength from './MinimumLength';


let App = () => (
	<Router>
		<React.Fragment>
			<h1>Quizzzz</h1>

			<Route exact path="/multiplier" render={ () => (
				<Multiplier x={ 10 } y={ 7 } /> 
			) }/>

			<Route exact path="/even-clicks" component={ EvenClicks } />

			<Route exact path="/count-by" render={ () => (
				<CountBy step={ 4 } /> 
			) }/>

			<Route exact path="/hide-me" render={ () => (
				<HideMe>Boo!</HideMe> 
			) }/>

			<Route exact path="/minimum-length" render={ () => (
				<MinimumLength minLength={ 20 } />
			) }/>			

		</React.Fragment>
	</Router>
);

export default App;
