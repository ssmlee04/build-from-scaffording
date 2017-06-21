const React = require('react');
const CreateClass = require('create-react-class');

const EventInfo = CreateClass({
  render: function() {
    const { eventToShow = {} } = this.props;

    return (
      <div style={this.props.style} className={this.props.className}>
        {(eventToShow.id &&
          <div>
            title: {eventToShow.title}
            <button onClick={() => this.props.onClick(eventToShow.id)}>
              Delete this event
            </button>
          </div>) ||
          null}
      </div> || null
    );
  },
});

module.exports = EventInfo;
