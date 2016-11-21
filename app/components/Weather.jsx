var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeather');

var Weather = React.createClass({
	getInitialState: function() {
		return {
			isLoading: false
		};
	},
	handleSearch: function(location){
		var that = this;

		this.setState({ isLoading: true });
		openWeatherMap.getTemp(location).then(function(data) {
			that.setState({
				location: data.name,
				temp: data.main.temp,
				isLoading: false
			});
		}, function(errorMessage) {
			that.setState({ isLoading: false });
			console.log(errorMessage);
		});
	},
	render: function() {
		var {isLoading, temp, location} = this.state;

		function renderMessage() {
			if(isLoading) {
				return <h3 className="text-center"><small>Fetching weather...</small></h3>;
			} else if(temp && location) {
				return <WeatherMessage temp={temp} location={location} />;
			}
		}

		return (
			<div>
				<h1 className="text-center">Get Weather</h1>
				<WeatherForm
					onSearch={this.handleSearch}
				/>
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;
