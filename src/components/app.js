import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from '../routes/home';
import Forecast from '../routes/Forecast';
import QMPlus from '../routes/QMPlus';
import QMFeed from '../routes/QMFeed';
import Settings from '../routes/Settings';
import Paris from '../routes/Cities/Paris';
import SanFrancisco from '../routes/Cities/SanFrancisco'
import Dubai from '../routes/Cities/Dubai'
import MexicoCity from '../routes/Cities/MexicoCity'
import Albany from '../routes/Cities/Albany'
import Miami from '../routes/Cities/Miami'

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
					<Forecast path="/Forecast/" />
					<QMPlus path="/QMPlus/" />
					<QMFeed path="/QMFeed/" />
					<Settings path="/Settings/" />
					<Paris path="/Cities/Paris/" />
					<SanFrancisco path="/Cities/SanFrancisco/" />
					<Dubai path="/Cities/Dubai/" />
					<MexicoCity path="/Cities/MexicoCity/" />
					<Albany path="/Cities/Albany/" />
					<Miami path="/Cities/Miami/" />
				</Router>
			</div>
		);
	}
}
