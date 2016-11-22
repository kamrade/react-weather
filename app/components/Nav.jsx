var React = require('react');
var Link = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;

var Nav = React.createClass({
	onSearch: function(e) {
		e.preventDefault();
		var location = this.refs.search.value;
		var encodedLocation = encodeURIComponent(location);
		if(location.length > 0) {
			this.refs.search.value = "";
			window.location.hash = "#/?location=" + encodedLocation;
		}
	},
	render: function() {
		return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">
							<Link to='/'>React Weather App</Link>
						</li>
						<li>
							<IndexLink to='/' activeClassName='active'
								activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
						</li>
						<li>
							<Link to='/about' activeClassName='active'
								activeStyle={{fontWeight: 'bold'}}>About</Link>
						</li>
						<li>
							<Link to='/examples' activeClassName='active'
								activeStyle={{fontWeight: 'bold'}}>Examples</Link>
						</li>
					</ul>
				</div>
				<div className="top-bar-right">
					<form onSubmit={this.onSearch}>
						<ul className="menu">
							<li><input type="search" placeholder="Search weather by city" ref="search" /></li>
							<li><input type="submit" className="button" value="Get weather" /></li>
						</ul>
					</form>
				</div>

			</div>
		);

	}
});

module.exports = Nav;
