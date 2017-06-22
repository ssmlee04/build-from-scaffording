const React = require('react');
const CreateClass = require('create-react-class');
const EventList = require('./../../components/events/EventList.jsx');
const EventInfo = require('./../../components/events/EventInfo.jsx');
const Header = require('./../../components/header/Header.jsx');
const LoadingMask = require('./../../components/loadingmask/LoadingMask.jsx');
const FormInput = require('./../../components/common/FormInput.jsx');
const eventsService = require('./../../services/events/events');
import { Input, Button } from 'antd';
import validator from 'validator';
import Formsy from 'formsy-react';

const Events = CreateClass({
  getInitialState: function() {
    return {
      isCreatingEvent: false,
      isUpdatingEvent: false
    };
  },
  getDefaultProps: function() {
    return {
      pageTitle: 'Events',
      events: [],
      eventToShow: {}
    };
  },
  openCreateEventPanel: function(show) {
    this.setState({ isCreatingEvent: show });
  },
  openUpdateEventPanel: function(show) {
    this.setState({ isUpdatingEvent: show });
  },
  onClickEvent: function(event) {
    var { eventModel } = this.props;
    eventModel.setEventToShow(event);
  },
  deleteEvent: function(id) {
    eventsService.delete(id);
  },
  createEvent: function(model) {
    eventsService.create(model);
    this.openCreateEventPanel(false);
  },
  updateEvent: function(id) {
    var type = this.refs['type_update'].value;
    var serviceId = this.refs['serviceId_update'].value;
    var icon = this.refs['icon_update'].value;
    var timestamp = this.refs['timestamp_update'].value;
    var title = this.refs['title_update'].value;
    var data = this.refs['data_update'].value;

    eventsService.update(id, { type, serviceId, icon, timestamp, title, data });
    this.openUpdateEventPanel(false);
  },
  setTitleFilter: function(e) {
    var { eventModel } = this.props;
    var titleFilter = this.refs['titleFilter'].value;

    eventModel.setTitleFilter(titleFilter);
  },
  enableButton() {
      this.setState({
        canSubmit: true
      });
    },
    disableButton() {
      this.setState({
        canSubmit: false
      });
    },
  render: function() {
    var { pageTitle, eventModel } = this.props;
    var { isCreatingEvent, isUpdatingEvent } = this.state;
    var events = eventModel.allFiltered();
    var eventToShow = eventModel.getEventToShow() || {};

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
          deleteEvent={this.deleteEvent}
          openUpdateEventPanel={this.openUpdateEventPanel}
          eventToShow={eventToShow}
        />
      </div>
    );

    return (
      <div>
        <LoadingMask show={isCreatingEvent}>
          <div className='myDiv'>
            <div className='bgImg' />
              <Formsy.Form onValidSubmit={this.createEvent} onValid={this.enableButton} onInvalid={this.disableButton}>
                <h3 className='inline'>type</h3><FormInput name="type" validationError="This is not a valid type" required/><br/>
                <h3 className='inline'>serviceId</h3><FormInput name="serviceId" validationError="This is not a valid serviceId" required/><br/>
                <h3 className='inline'>icon</h3><FormInput name="icon" validationError="This is not a valid icon" required/><br/>
                <h3 className='inline'>timestamp</h3><FormInput name="timestamp" validations="isNumeric" validationError="This is not a valid timestamp" required/><br/>
                <h3 className='inline'>title</h3><FormInput name="title" validationError="This is not a valid title" required/><br/>
                <h3 className='inline'>data</h3><FormInput name="data" validationError="This is not a valid data" required/><br/>
                <button type="submit" disabled={!this.state.canSubmit}> Create event </button>
                <button onClick={this.openCreateEventPanel.bind(this, false)}>
                  Close
                </button>
              </Formsy.Form>
          </div>
        </LoadingMask>
        <LoadingMask show={isUpdatingEvent}>
          <Formsy.Form onValidSubmit={this.updateEvent.bind(this, eventToShow.id)} onValid={this.enableButton} onInvalid={this.disableButton}>
            <h3 className='inline'>type</h3><FormInput name="type" validationError="This is not a valid type" required/><br/>
            <h3 className='inline'>serviceId</h3><FormInput name="serviceId" validationError="This is not a valid serviceId" required/><br/>
            <h3 className='inline'>icon</h3><FormInput name="icon" validationError="This is not a valid icon" required/><br/>
            <h3 className='inline'>timestamp</h3><FormInput name="timestamp" validations="isNumeric" validationError="This is not a valid timestamp" required/><br/>
            <h3 className='inline'>title</h3><FormInput name="title" validationError="This is not a valid title" required/><br/>
            <h3 className='inline'>data</h3><FormInput name="data" validationError="This is not a valid data" required/><br/>
            <button type="submit" disabled={true}> Update event </button>
            <button onClick={this.openUpdateEventPanel.bind(this, false)}> Close</button>
          </Formsy.Form>
        </LoadingMask>
        <Header pageTitle={pageTitle + ' ' + (eventToShow.title || '')}>
          <div style={{ flex: 1, display: 'inline', float: 'right' }}>
            <span>Filter title: </span>
            <input
              type="text"
              ref="titleFilter"
              onKeyUp={this.setTitleFilter}
            />
          </div>
        </Header>
        <div className="wrapper">
          {events.length > 0
            ? layout
            : <div>No events in the search, what a shame...</div>}
        </div>
          <Button className='btnCreateEvent' onClick={this.openCreateEventPanel.bind(this, true)}>
            Create an event
          </Button>
      </div>
    );
  }
});

module.exports = Events;
