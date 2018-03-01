// import preact
import { h, render, Component } from 'preact';
// import layouts for the app
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
// import the styles
import style from './style';
// import jquery for API calls
import $ from 'jquery';

export default class Home extends Component {
	// a constructor with initial set states
	constructor(props) {
		super(props);
		// empty states intially
		this.state.locate = "";
		this.state.temp = "";
		this.state.feelslike = "";
		this.state.humidity = "";
		this.state.windspeed = "";
		this.state.weather = "";
		this.state.weatherimg = "";
	}

	// get the API data from Wunderground
	getData = function(){
    	$.ajax({
    		url: 'http://api.wunderground.com/api/214f1e00746632d6/conditions/forecast/geolookup/q/autoip.json',
    		dataType: 'jsonp',
    		// on success, fetch the data and set the state
    		success: function(parsed_json){
      			this.setState({locate: parsed_json['current_observation']['display_location']['full']});
      			this.setState({temp: parsed_json['current_observation']['temp_c']});
      			this.setState({feelslike: parsed_json['current_observation']['feelslike_c']});
      			this.setState({humidity: parsed_json['current_observation']['relative_humidity']});
      			this.setState({windspeed: parsed_json['current_observation']['wind_kph']});
      			this.setState({weather: parsed_json['current_observation']['weather']});
      			this.setState({weatherimg: parsed_json['current_observation']['icon_url']});
    		}.bind(this) // creates a new function that, when called, has its this keyword
    					 // set to the provided value
    	});
  	}

  	// executed after the first render only on the client side
  	// where AJAX requests and DOM or state updates should occur
  	// used to update the state so other lifecycle methods are triggered
  	componentDidMount = function() {
  		this.getData();
  	}

  	// display the webpage
	render() {
		return (
			<div class={style.home}>
			<Card>
				<Card.Primary>
					<div class = {style.realFeel}><p>Real feel: {this.state.feelslike} °C</p></div>
					<div class = {style.currentTemp}><p>{this.state.temp} °C</p></div>
					<p>Weather conditions: {this.state.weather} <img src={this.state.weatherimg} /></p>
					</Card.Primary>

					<Card.SupportingText>
						<p> {this.state.locate}</p>


						<p>Humidity: {this.state.humidity}</p>
						<p>Wind speed: {this.state.windspeed} km/h</p>
					</Card.SupportingText>
				</Card>

			</div>
		);
	}
}
