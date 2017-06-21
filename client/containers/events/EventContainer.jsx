const React = require('react');
const eventsService = require('./../../services/events/events');
const CreateClass = require('create-react-class');
const Events = require('./../../components/events/Events.jsx');
const eventModel = require('./../../models/event');

const EventContainer = CreateClass({
  componentDidMount() {
    eventModel.subscribe(this.forceUpdate.bind(this));

    eventsService.get();
  },
  render: function() {
    const newProps = { ...this.props, eventModel };

    return <Events {...newProps} />;
  },
});

module.exports = EventContainer;
