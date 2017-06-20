const React = require('react');
const CreateClass = require('create-react-class');
const _     = require('lodash');
const cx    = require('classnames');

const request = require('superagent');
const LoadingMask = require('./../components/Loadingmask');

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
    return (<div id='devices'>
          <LoadingMask show={isShowLoading} />
          <Header
            pageTitle={pageTitle}
            isSearchingDevice={isSearchingDevice}
            searchedDeviceList={searchedDeviceList}
            isShowUngroupBtn={isShowUngroupBtn}
            isUngroupBtnDisabled={Boolean(isUngroupingDevices)}
            isShowDeleteGroupBtn={isShowDeleteGroupBtn}
            isDeleteGroupBtnDisabled={Boolean(isDeletingDeviceGroup)}
            isShowCreateGroupBtn={noSelectedDevice && isShowCreateGroupBtn}
            isShowMoveGroupBtn={isShowMoveGroupBtn}
            isCreateGroupBtnDisabled={Boolean(isCreatingDeviceGroup)}
            groups={groupsWithoutSelected}
            onClickSearchedDevice={this.onClickSearchedDevice}
            onChangeSearchBoxKeyword={this.onChangeSearchBoxKeyword}
            onRequestCreateGroup={this.onRequestCreateGroup}
            onRequestDeleteGroup={this.onRequestDeleteGroup}
            onRequestUngroup={this.onRequestUngroup}
            onRequestRegister={this.onRequestRegister}
            onRequestMoveGroup={this.onRequestMoveGroup}
          />
          { isShowLoading ? null : (!isNoDevice ? layout : noDevice) }
          <GroupForm
            title={groupFormTitle}
            actionBtnLabel={groupFormActionBtnLabel}
            isOpen={isShowGroupForm}
            screenGroups={screenGroups}
            items={groupFormItems}
            groupId={groupFormGroupId}
            defaultName={groupFormGroupName}
            defaultScreenGroupId={groupFormScreenGroupId}
            isCheckingGroupNameAvailability={isCheckingDeviceGroupNameAvailability}
            resultOfCheckingGroupNameAvailability={resultOfCheckingDeviceGroupNameAvailability}
            onClickActionBtn={this.onClickActionBtnOfGroupForm}
            onClickCancelBtn={this.onClickCancelBtnOfGroupForm}
            onGroupNameChanged={this.onGroupFormGroupNameChanged}
            onOpened={this.onGroupFormOpened}
          />
          <RegisterDeviceDialog
            isOpen={isShowRegisterDeviceDialog}
            entities={entities}
            onSubmit={this.onSubmitRegisterDeviceForm}
            onCancel={this.onCancelRegisterDeviceForm}
          />
        </div>
      );
  }
});

module.exports = Events;
