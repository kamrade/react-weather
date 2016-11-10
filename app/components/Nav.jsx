var React = require('react');
var Link = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;

var Nav = (props) => {
	return (
		<div className="nav">
			<h2>Navigation</h2>
			<IndexLink to='/' activeClassName='active'
				activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
			<Link to='/about' activeClassName='active'
				activeStyle={{fontWeight: 'bold'}}>About</Link>
			<Link to='/examples' activeClassName='active'
				activeStyle={{fontWeight: 'bold'}}>Examples</Link>
		</div>
	);
};

module.exports = Nav;
