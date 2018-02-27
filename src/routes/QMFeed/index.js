import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';

export default class QMFeed extends Component {
	render() {
		return (
			<div class={style.QMFeed}>


					<iframe src="https://feed.mikle.com/widget/v2/66981/" height="640px" width="100%" class="fw-iframe" scrolling="no" frameborder="0"></iframe>

			</div>
		);
	}
}
