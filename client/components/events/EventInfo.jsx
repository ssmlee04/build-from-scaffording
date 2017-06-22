const React = require('react');
const CreateClass = require('create-react-class');

const EventInfo = CreateClass({
  render: function() {
    const { eventToShow = {} } = this.props;

    return (
      <div style={this.props.style} className={this.props.className}>
        {(eventToShow.id &&
          <div>
            Title: {eventToShow.title}
            <hr />
            <button onClick={() => this.props.openUpdateEventPanel(eventToShow.id)}>
              Update this event
            </button>
            <button onClick={() => this.props.deleteEvent(eventToShow.id)}>
              Delete this event
            </button>
          </div>) ||
          null}
      </div> || null
    );
  },
});

module.exports = EventInfo;
