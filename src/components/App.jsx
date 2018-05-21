import React, { Component } from 'react';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';

import Timer from './timer/Timer';
import Stopwatch from './Stopwatch';

class App extends Component {
	render() {
		return (
			<div className="container-fluid app">
				<Router>
					<div className="row">
						<div className="mx-auto col-xl-8 col-lg-8 col-md-10 layout">
							<div className="app-buttons">
								<NavLink className="btn-link" to="/timer">Timer</NavLink>
								<NavLink className="btn-link" to="/stopwatch">Stopwatch</NavLink>
							</div>

							<div className="app-content">
								<Route exact path="/" component={Timer} />
								<Route path="/timer" component={Timer} />
								<Route path="/stopwatch" component={Stopwatch} />
							</div>
						</div>
					</div>
				</Router>
			</div>
		);
	}
}

export default App
