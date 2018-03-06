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
    // geolookup, find the location of the user
    this.state.locate = "";

    // conditions
    this.state.temp = "";
    this.state.feelslike = "";
    this.state.humidity = "";
    this.state.windspeed = "";
    this.state.weather = "";
    this.state.weatherimg = "";
    this.state.uvindex = "";
    this.state.visibility = "";

    // astronomy
    this.state.sunrise_hour = "";
    this.state.sunset_hour = "";
    this.state.sunrise_minute = "";
    this.state.sunset_minute = "";

    // hourly forecast
    // stores info for 6 hours ahead
    this.state = {
      hourly: [],
    };
  }

  // get the API data from Wunderground
  // get location, conditions, sunset/sunrise times
  getData = function() {
      $.ajax({
        url: 'http://api.wunderground.com/api/214f1e00746632d6/conditions/astronomy/forecast/q/UK/London.json',
        dataType: 'jsonp',
        // on success, fetch the data and set the state
        // by calling parseResponse
        success: this.parseResponse,
        // if API fails display the error message in the console log
        error: function(req, err){ console.log('API call failed ' + err); }
      });
    }

   // fetch the hourly forecast separatly
   // since it is stored in an array
   // each hour needs to be accessed individually [0], [1], etc.
   fetchHourlyForecast = function() {
      fetch('http://api.wunderground.com/api/214f1e00746632d6/hourly/q/UK/London.json')
        .then((response) => response.json())
        .then((data) => {
          console.log(data.hourly_forecast);
          this.setState({
            hourly: data.hourly_forecast,
          });
        });
    }

    // executed after the first render only on the client side
    // where AJAX requests and DOM or state updates should occur
    // used to update the state so other lifecycle methods are triggered
    componentDidMount = function() {
      this.getData();
      this.fetchHourlyForecast();
    }

  // display the webpage
  render() {
    return (
      <div class={style.home}>
				<Card>
					<Card.Primary>
						<div class = {style.locationAddress}><p> {this.state.locate}</p></div>
						<div class = {style.realFeel}><p>Real feel: {this.state.feelslike} °C</p></div>
						<div class = {style.windSpeed}><p>Wind speed: {this.state.windspeed} km/h</p></div>
						<div class = {style.currentTemp}><p>{this.state.temp} °C</p></div>
						<div class = {style.cweatherImg}><p> <img src={this.state.weatherimg} /></p></div>
						<div class = {style.weatherInfo}><p>{this.state.weather}</p></div>
						<div class = {style.sunriseTime}><p>Sunrise: {this.state.sunrise_hour}:{this.state.sunrise_minute}</p></div>
						<div class = {style.sunsetTime}><p>Sunset: {this.state.sunset_hour}:{this.state.sunset_minute}</p></div>
						<div class = {style.humidityStyle}><p>Humidity: {this.state.humidity}</p></div>
						<div class = {style.uvStyle}><p>UV Index: {this.state.uvindex}</p></div>
						<div class = {style.visibilityStyle}><p>Visibility: {this.state.visibility} km</p></div>
					</Card.Primary>
				</Card>
        
        <Card>
          <Card.Primary>
            <div class={style.home}>
              {this.state.hourly.slice(0, 6).map((hour) => (
                <table>
                  <thead>
                    <tr>
                      <th>{hour['FCTTIME'].civil}</th>
                    </tr>
                  </thead>

                  <tr>
                    <p><img src={hour.icon_url} /></p>
                    <p>Temperature: {hour['temp'].metric} °C</p>
                    <p>Chance of rain: {hour.pop}%</p>
                  </tr>
                </table>
              ))}
            </div>
          </Card.Primary>
        </Card>
      </div>
    );
  }

  parseResponse = (parsed_json) => {
      this.setState({locate: parsed_json['current_observation']['display_location']['full']});
      this.setState({temp: parsed_json['current_observation']['temp_c']});
      this.setState({feelslike: parsed_json['current_observation']['feelslike_c']});
      this.setState({humidity: parsed_json['current_observation']['relative_humidity']});
      this.setState({windspeed: parsed_json['current_observation']['wind_kph']});
      this.setState({weather: parsed_json['current_observation']['weather']});
      this.setState({weatherimg: parsed_json['current_observation']['icon_url']});
      this.setState({sunrise_hour: parsed_json['sun_phase']['sunrise']['hour']});
      this.setState({sunset_hour: parsed_json['sun_phase']['sunset']['hour']});
      this.setState({sunrise_minute: parsed_json['sun_phase']['sunrise']['minute']});
      this.setState({sunset_minute: parsed_json['sun_phase']['sunset']['minute']});
      this.setState({uvindex: parsed_json['current_observation']['UV']});
      this.setState({visibility: parsed_json['current_observation']['visibility_km']});
    };
}
