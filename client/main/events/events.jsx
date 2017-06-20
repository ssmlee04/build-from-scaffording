const React = require('react');
const CreateClass = require('create-react-class');
const _     = require('lodash');
const cx    = require('classnames');

const request = require('superagent');

const Events = CreateClass({
	getDefaultProps: function() {
		return {
		};
	},
	componentDidMount: function() {
		request.get('https://forgetful-elephant.herokuapp.com/events')
			.then((res)=>{
				console.log(res);
			})
	},
	render: function(){
		return <div className='events'>
			<i className='fa fa-rocket' /> Events Component ready to rock!
		</div>
	}
});

module.exports = Events;
