const React = require('react');
const CreateClass = require('create-react-class');
const EventListTab = require('./../../components/events/EventListTab.jsx');

const EventList = CreateClass({
  onClickEvent: function(event) {
    this.props.onClickEvent(event);
  },
  componentDidMount() {

  },
  render: function() {
    const { events = [], eventToShow={} } = this.props;

    return (
      <div style={this.props.style} className={this.props.className}>
        {events.map((d, i) => <EventListTab onClick={this.onClickEvent} key={i} event={d} isSelected={eventToShow && eventToShow.id === d.id} />)}
      </div>
    );
  },
});

module.exports = EventList;
