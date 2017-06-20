const React = require('react');
const CreateClass = require('create-react-class');
const _     = require('lodash');
const cx    = require('classnames');

const Events = require('./../components/events/Events.jsx');

const Main = CreateClass({
	getDefaultProps: function() {
		return {
			url : ''
		};
	},
	render: function(){
		return <div className='main'>
			<div className='fancybar' />
			<h1>Event thingie 9000</h1>
			<Events />
		</div>
	}
});

module.exports = Main;
