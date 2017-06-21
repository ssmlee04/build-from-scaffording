const React = require('react');
const CreateClass = require('create-react-class');
const EventList = require('./../../components/events/EventList.jsx');
const EventInfo = require('./../../components/events/EventInfo.jsx');
const Header = require('./../../components/header/Header.jsx');
const LoadingMask = require('./../../components/loadingmask/LoadingMask.jsx');
const eventsService = require('./../../services/events/events');

const Events = CreateClass({
  getInitialState: function() {
    return {
      isCreatingEvent: false,
    };
  },
  getDefaultProps: function() {
    return {
      pageTitle: 'Events',
      events: [],
      eventToShow: {},
    };
  },
  openCreateEventPanel: function(show) {
    console.log(show);
    this.setState({ isCreatingEvent: show });
  },
  onClickEvent: function(event) {
    var { eventModel } = this.props;
    eventModel.setEventToShow(event);
  },
  deleteEvent: function(id) {
    eventsService.delete(id);
  },
  createEvent: function() {
    var type = this.refs['type'].value;
    var serviceId = this.refs['serviceId'].value;
    var icon = this.refs['icon'].value;
    var timestamp = this.refs['timestamp'].value;
    var title = this.refs['title'].value;
    var data = this.refs['data'].value;
    eventsService.create({ type, serviceId, icon, timestamp, title, data });
    this.openCreateEventPanel(false);
  },
  setTitleFilter: function(e) {
    var { eventModel } = this.props;
    var titleFilter = this.refs['titleFilter'].value;
    eventModel.setTitleFilter(titleFilter);
  },
  render: function() {
    var { pageTitle, eventModel } = this.props;
    var { isCreatingEvent } = this.state;
    var events = eventModel.allFiltered();
    var eventToShow = eventModel.getEventToShow();

    const layout = (
      <div className="mainclass">
        <EventList
          className="aside"
          style={{ backgroundColor: 'red' }}
          events={events}
          onClickEvent={this.onClickEvent}
          eventToShow={eventToShow}
        />
        <EventInfo
          className="article"
          style={{ backgroundColor: 'green' }}
          onClick={this.deleteEvent}
          eventToShow={eventToShow}
        />
      </div>
    );

    return (
      <div>
        <LoadingMask show={isCreatingEvent}>
          <input type="text" ref="type" />
          <input type="text" ref="serviceId" />
          <input type="text" ref="icon" />
          <input type="text" ref="timestamp" />
          <input type="text" ref="title" />
          <input type="text" ref="data" />
          <button onClick={this.createEvent}> create event </button>
          <button onClick={this.openCreateEventPanel.bind(this, false)}>
            {' '}close{' '}
          </button>
        </LoadingMask>
        <Header pageTitle={pageTitle}>
          Filter title: <input type='text' ref='titleFilter' onKeyUp={this.setTitleFilter} />
        </Header>
        <div className="wrapper">
          {events.length > 0 ? layout : layout}
        </div>
        <div>
          <button onClick={this.openCreateEventPanel.bind(this, true)}>
            create an event
          </button>
        </div>
      </div>
    );
  },
});

module.exports = Events;
