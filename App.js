import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Multiplier from './Multiplier';
import EvenClicks from './EvenClicks';
import CountBy from './CountBy';
import HideMe from './HideMe';
import MinimumLength from './MinimumLength';
import Posts from './Posts';


let App = () => (
	<Router>
		<React.Fragment>
			<h1>Quizzzz</h1>

			<Route exact path="/" component={ Posts } />

			<Route exact path="/multiplier/:x/:y" render={ ({match}) => (
				<Multiplier x={ +match.params.x } y={ +match.params.y } /> 
			) }/>

			<Route exact path="/even-clicks" component={ EvenClicks } />

			<Route exact path="/count-by/:step" render={ ({match}) => (
				<CountBy step={ +match.params.step } /> 
			) }/>

			<Route exact path="/hide-me/:children" render={ ({match}) => (
				<HideMe>{ match.params.children }</HideMe> 
			) }/>

			<Route exact path="/minimum-length/:length" render={ ({match}) => (
				<MinimumLength minLength={ +match.params.length } />
			) }/>			

		</React.Fragment>
	</Router>
);

export default App;
