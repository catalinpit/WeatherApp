import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from '../routes/home';
import Profile from '../routes/profile';
<<<<<<< HEAD
import Weather from '../routes/weather'
=======
import QMFeed from '../routes/QMFeed';
>>>>>>> 7f7fbadd961abd26288dd08392ec050ebc3d8464
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
<<<<<<< HEAD
					<Weather path="/weather/" />
=======
					<QMFeed path="/QMFeed/"/>
>>>>>>> 7f7fbadd961abd26288dd08392ec050ebc3d8464
				</Router>
			</div>
		);
	}
}
