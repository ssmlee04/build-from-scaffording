const React = require('react');
const CreateClass = require('create-react-class');
const _     = require('lodash');
const cx    = require('classnames');

const request = require('superagent');
const EventList = require('./../../components/events/EventList.jsx');
const EventInfo = require('./../../components/events/EventInfo.jsx');
const Header = require('./../../components/header/Header.jsx');
const LoadingMask = require('./../../components/loadingmask/Loadingmask.jsx');
const eventsService = require('./../../services/events/events')

const layout = <div>nothing is here</div>
const noEvents = <div>nothing is here</div>

const Events = CreateClass({
  getDefaultProps: function() {
    return {
      pageTitle: 'Events',
      events: [],
      eventToShow: {},
    };
  },
  componentDidMount: function() {
    
  },
  onClickEvent: function(event) {
    var { eventModel } = this.props;
    eventModel.setEventToShow(event)
  },
  createEvent: function() {
    eventsService.create()
  },
  render: function() {
    var { pageTitle, eventModel  } = this.props;
    var events = eventModel.all()
    var eventToShow = eventModel.getEventToShow()
    var isCreatingEvent = eventModel.getIsCreatingEvent()

    const layout = <div>
      <EventList
        events={events}
        onClickEvent={this.onClickEvent}
        eventToShow={eventToShow}
      />
      <EventInfo
        eventToShow={eventToShow}
      />
      

    </div>

    return (<div id='devices'>
          <LoadingMask show={false} />
          <LoadingMask show={isCreatingEvent} />
          <Header
            pageTitle={pageTitle}
            // isSearchingDevice={isSearchingDevice}
            // searchedDeviceList={searchedDeviceList}
            // isShowUngroupBtn={isShowUngroupBtn}
            // isUngroupBtnDisabled={Boolean(isUngroupingDevices)}
            // isShowDeleteGroupBtn={isShowDeleteGroupBtn}
            // isDeleteGroupBtnDisabled={Boolean(isDeletingDeviceGroup)}
            // isShowCreateGroupBtn={noSelectedDevice && isShowCreateGroupBtn}
            // isShowMoveGroupBtn={isShowMoveGroupBtn}
            // isCreateGroupBtnDisabled={Boolean(isCreatingDeviceGroup)}
            // groups={groupsWithoutSelected}
            // onClickSearchedDevice={this.onClickSearchedDevice}
            // onChangeSearchBoxKeyword={this.onChangeSearchBoxKeyword}
            // onRequestCreateGroup={this.onRequestCreateGroup}
            // onRequestDeleteGroup={this.onRequestDeleteGroup}
            // onRequestUngroup={this.onRequestUngroup}
            // onRequestRegister={this.onRequestRegister}
            // onRequestMoveGroup={this.onRequestMoveGroup}
          />
          {events.length ? layout : noEvents}
          <div>
            <button onClick={this.createEvent}>create an event</button>
          </div>
        </div>
      );
  }
});
          // { isShowLoading ? null : (!isNoDevice ? layout : noDevice) }
          // <GroupForm
          //   title={groupFormTitle}
          //   actionBtnLabel={groupFormActionBtnLabel}
          //   isOpen={isShowGroupForm}
          //   screenGroups={screenGroups}
          //   items={groupFormItems}
          //   groupId={groupFormGroupId}
          //   defaultName={groupFormGroupName}
          //   defaultScreenGroupId={groupFormScreenGroupId}
          //   isCheckingGroupNameAvailability={isCheckingDeviceGroupNameAvailability}
          //   resultOfCheckingGroupNameAvailability={resultOfCheckingDeviceGroupNameAvailability}
          //   onClickActionBtn={this.onClickActionBtnOfGroupForm}
          //   onClickCancelBtn={this.onClickCancelBtnOfGroupForm}
          //   onGroupNameChanged={this.onGroupFormGroupNameChanged}
          //   onOpened={this.onGroupFormOpened}
          // />
          // <RegisterDeviceDialog
          //   isOpen={isShowRegisterDeviceDialog}
          //   entities={entities}
          //   onSubmit={this.onSubmitRegisterDeviceForm}
          //   onCancel={this.onCancelRegisterDeviceForm}
          // />

module.exports = Events;
