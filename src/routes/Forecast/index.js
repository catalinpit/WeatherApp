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

export default class Forecast extends Component {
  // a constructor with initial set states
  constructor(props) {
    super(props);


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
      <div class={style.forecastCard}>
				<Card>
					<Card.Primary>
						<div class = {style.forecastTitle}><p>Hourly Forecast</p></div>
					</Card.Primary>
				</Card>
        <Card>
          <Card.Primary>
              {this.state.hourly.slice(0, 6).map((hour) => (
                <div>
                  <table width = "300">
                    <tr>
											<th rowspan = "2">{hour['FCTTIME'].civil}</th>
											<td></td>
                    </tr>
										<tr>
										<td></td>
										<div class = {style.forecastData}>
										<td>
										<div class = {style.imgStyle}><p><img src={hour.icon_url} /></p></div>
										<div class = {style.tempStyle}><p>Temperature: {hour['temp'].metric} °C</p></div>
										<div class = {style.rainStyle}><p>Chance of rain: {hour.pop}%</p></div>
										</td>
										</div>
										</tr>
                  </table>
                </div>
              ))}
          </Card.Primary>
        </Card>
      </div>
    );
  }

  parseResponse = (parsed_json) => {
      this.setState({locate: parsed_json['current_observation']['display_location']['full']});
      this.setState({temp: parsed_json['current_observation']['temp_c']});
      this.setState({weather: parsed_json['current_observation']['weather']});
      this.setState({weatherimg: parsed_json['current_observation']['icon_url']});
    };
}
