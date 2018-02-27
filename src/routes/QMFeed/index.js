import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';

export default class QMFeed extends Component {
	render() {
		return (
			<div class={style.QMFeed}>
				<div id="header">
					<h1>QM News</h1>
				</div>
				
				<iframe src="https://feed.mikle.com/widget/v2/66981/" height="500px" width="100%" class="fw-iframe" scrolling="no" frameborder="0"></iframe>


				/**
				<Card>
					<Card.Primary>
						<Card.Title>Home card</Card.Title>0
						<Card.Subtitle>Welcome to our22 unfinished weather application!</Card.Subtitle>
					</Card.Primary>
					<Card.SupportingText>
						Shah was here
						Now his not
					</Card.SupportingText>
					<Card.Actions>
						<Card.Action>OKAY</Card.Action>
					</Card.Actions>
				</Card>
				*******/
			</div>
		);
	}
}
