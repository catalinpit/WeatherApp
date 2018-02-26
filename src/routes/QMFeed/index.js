import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';

export default class QMFeed extends Component {
	render() {
		return (
			<div class={style.QMFeed}>
				<h1>QM News</h1>

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
			</div>
		);
	}
}
