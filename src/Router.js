import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar.js';
import Home from './pages/home.js';
import UserProfile from './pages/user_profile.js';

class Router extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/user_profile">
							<UserProfile />
						</Route>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default Router;