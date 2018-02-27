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

				<iframe width="250" height="450" class="rssdog" src="http://www.rssdog.com/index.htm?url=http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Frss.xml&mode=html&showonly=&maxitems=10&showdescs=1&desctrim=0&descmax=0&tabwidth=100%25&linktarget=_blank&textsize=inherit&bordercol=%23d4d0c8&headbgcol=%23999999&headtxtcol=%23ffffff&titlebgcol=%23f1eded&titletxtcol=%23000000&itembgcol=%23ffffff&itemtxtcol=%23000000&ctl=0"></iframe>

	
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
