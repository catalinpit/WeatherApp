import { h, Component } from 'preact';
import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';
import style from './style';

export default class QMPlus extends Component {

	render({clickFunction}) {
		if(!clickFunction){
			clickFunction = () => {
				console.log("passed something as 'clickFunction' that wasn't a function !");
			}
		}
		//dont need to use this one
		return (
			<div>
				<button onClick={window.open("http://qmplus.qmul.ac.uk/"), "_blank"}>
					QMPLUS
				</button>
			</div>
		);
	}
}
