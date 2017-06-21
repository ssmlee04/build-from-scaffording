const React = require('react');
const CreateClass = require('create-react-class');
const EventContainer = require('./../containers/events/EventContainer.jsx');

const Main = CreateClass({
  getDefaultProps: function() {
    return {
      url: '',
    };
  },
  render: function() {
    return (
      <div className="main">
        <div className="fancybar" />
        <h1>Event thingie 9000</h1>
        <EventContainer />
      </div>
    );
  },
});

module.exports = Main;
