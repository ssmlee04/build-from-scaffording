const React = require('react');
const CreateClass = require('create-react-class');
import { Form, FormItem, Icon, Input, Button } from 'antd';

const EventInfo = CreateClass({
  render: function() {
    const { eventToShow = {} } = this.props;

    return (
      <div style={this.props.style} className={this.props.className}>
        {(eventToShow.id &&
          <div>
            <h3>type: {eventToShow.type}</h3>
            <h3>title: {eventToShow.title}</h3>
            <h3>timestamp: {eventToShow.timestamp}</h3>
            <h3>serviceId: {eventToShow.serviceId}</h3>
            <h3>data: {eventToShow.data}</h3>
            <hr />
            <Button onClick={() => this.props.openUpdateEventPanel(eventToShow.id)}>
              Update this event
            </Button>
            <Button onClick={() => this.props.deleteEvent(eventToShow.id)}>
              Delete this event
            </Button>
          </div>) ||
          null}
      </div> || null
    );
  },
});

module.exports = EventInfo;
