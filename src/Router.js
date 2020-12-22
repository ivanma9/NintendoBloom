import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/home.js';
import Navbar from './components/navbar.js';

class Router extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<div>
								<h2>Home</h2>
							</div>
						</Route>
						<Route path="/user_profile">
							<div>
								<h2>User Profile</h2>
							</div>
						</Route>
					</Switch>
				</div>
			</BrowserRouter>
		);

	}
}

export default Router;