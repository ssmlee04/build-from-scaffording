import React from 'react';
// import pure from '../utils/pure';
// import _trim from 'lodash/trim';
// import { autobind } from 'core-decorators';
// import { debounce } from 'core-decorators';
// import Immutable from 'immutable';
// import Box from 'grommet/components/Box';
// import withIsPropsChanged from '../utils/withIsPropsChanged';
// import LoadingMask from '../common/LoadingMask';
// import GroupMenu from '../common/GroupMenu';
// import Header from './Header';
// import DeviceList from './DeviceList';
// import DeviceInfo from './DeviceInfo';
// import NoDevice from './NoDevice';
// import GroupForm from '../common/GroupForm';
// import RegisterDeviceDialog from './RegisterDeviceDialog';

// @pure
// @withIsPropsChanged
export default class extends React.Component {
  static displayName = 'Events';
  // static propTypes = {
  //   isPropsChanged: React.PropTypes.object.isRequired,
  //   isAuthenticated: React.PropTypes.bool.isRequired,
  //   accessToken: React.PropTypes.string,
  //   pageTitle: React.PropTypes.string.isRequired,
  //   groups: React.PropTypes.instanceOf(Immutable.Map).isRequired,
  //   devices: React.PropTypes.instanceOf(Immutable.Map).isRequired,
  //   deviceList: React.PropTypes.instanceOf(Immutable.List).isRequired,
  //   entities: React.PropTypes.instanceOf(Immutable.Map).isRequired,
  //   selectedGroupId: React.PropTypes.string,
  //   selectedGroup: React.PropTypes.instanceOf(Immutable.Map),
  //   isFetchingDevices: React.PropTypes.bool.isRequired,
  //   isSearchingDevice: React.PropTypes.bool.isRequired,
  //   searchedDeviceList: React.PropTypes.instanceOf(Immutable.List).isRequired,
  //   isNoDevice: React.PropTypes.bool.isRequired,
  //   deviceToShow: React.PropTypes.instanceOf(Immutable.Map),
  //   isFetchingDeviceInfo: React.PropTypes.bool.isRequired,
  //   isRenamingDevice: React.PropTypes.bool.isRequired,
  //   isFetchingDeviceGroups: React.PropTypes.bool.isRequired,
  //   isCreatingDeviceGroup: React.PropTypes.bool.isRequired,
  //   isMovingDevicesToDeviceGroup: React.PropTypes.bool.isRequired,
  //   isUngroupingDevices: React.PropTypes.bool.isRequired,
  //   isDeletingDeviceGroup: React.PropTypes.bool.isRequired,
  //   currentEntityId: React.PropTypes.string,
  //   isCheckingDeviceGroupNameAvailability: React.PropTypes.bool.isRequired,
  //   resultOfCheckingDeviceGroupNameAvailability: React.PropTypes.bool,
  //   // actions
  //   selectGroup: React.PropTypes.func.isRequired,
  //   renameDevice: React.PropTypes.func.isRequired,
  //   fetchDeviceList: React.PropTypes.func.isRequired,
  //   searchDevice: React.PropTypes.func.isRequired,
  //   resetResultOfSearchingDevice: React.PropTypes.func.isRequired,
  //   fetchDeviceInfo: React.PropTypes.func.isRequired,
  //   showDeviceInfo: React.PropTypes.func.isRequired,
  //   changeSearchBoxKeyword: React.PropTypes.func.isRequired,
  //   fetchDeviceGroupList: React.PropTypes.func.isRequired,
  //   createDeviceGroup: React.PropTypes.func.isRequired,
  //   moveDevicesToDeviceGroup: React.PropTypes.func.isRequired,
  //   ungroupDevices: React.PropTypes.func.isRequired,
  //   deleteDeviceGroup: React.PropTypes.func.isRequired,
  //   fetchScreenGroupList: React.PropTypes.func.isRequired,
  //   registerDevice: React.PropTypes.func.isRequired,
  //   deactivateDevice: React.PropTypes.func.isRequired,
  //   checkDeviceGroupNameAvailability: React.PropTypes.func.isRequired,
  //   resetResultOfCheckingDeviceGroupNameAvailability: React.PropTypes.func.isRequired,
  // };
  // state = {
  //   selectedDeviceIdSet: Immutable.Set(),
  //   groupFormType: null,
  //   groupFormTitle: '',
  //   groupFormActionBtnLabel: '',
  //   groupFormGroupId: '',
  //   groupFormGroupName: '',
  //   groupFormScreenGroupId: null,
  //   groupFormItems: [],
  //   isShowGroupForm: false,
  //   isShowRegisterDeviceDialog: false,
  // }

  componentDidMount() {
    // this.fetchData();
  }

  componentWillReceiveProps(newProps) {
    // const {
    //   isPropsChanged,
    //   isCreatingDeviceGroup,
    //   isMovingDevicesToDeviceGroup,
    // } = newProps;

    // if (
    //   (isPropsChanged.isCreatingDeviceGroup && isCreatingDeviceGroup) ||
    //   (isPropsChanged.isMovingDevicesToDeviceGroup && isMovingDevicesToDeviceGroup)
    // ) {
    //   this.resetGroupForm();
    // }

    // // reset selected state when currnet group changed
    // if (isPropsChanged.selectedGroupId) {
    //   const {selectedDeviceIdSet} = this.state;
    //   this.setState({
    //     selectedDeviceIdSet: selectedDeviceIdSet.clear(),
    //   });
    // }
  }

  componentDidUpdate() {
    // const {
    //   isPropsChanged,
    //   isAuthenticated,
    //   currentEntityId,
    // } = this.props;

    // // trigger fetching after updating to avoid DOM error!
    // if (
    //   // user just logged in
    //   (isPropsChanged.isAuthenticated && isAuthenticated) ||
    //   // current entity changed!
    //   (isPropsChanged.currentEntityId && currentEntityId)
    // ) {
    //   this.fetchData();
    // }
  }

  // @autobind
  fetchData() {
    // this.props.fetchDeviceGroupList();
    // this.props.fetchDeviceList();
    // this.props.fetchScreenGroupList();
  }

  // openRegisterDeviceDialog() {
  //   this.setState({ isShowRegisterDeviceDialog: true });
  // }

  // closeRegisterDeviceDialog() {
  //   this.setState({ isShowRegisterDeviceDialog: false });
  // }

  // resetGroupForm() {
  //   this.setState({
  //     groupFormType: null,
  //     groupFormTitle: '',
  //     groupFormActionBtnLabel: '',
  //     groupFormGroupId: '',
  //     groupFormGroupName: '',
  //     groupFormScreenGroupId: null,
  //     groupFormItems: [],
  //     isShowGroupForm: false,
  //   });
  // }

  // @autobind
  // @debounce(300)
  // onChangeSearchBoxKeyword(keyword) {
  //   const {
  //     accessToken,
  //   } = this.props;

  //   this.props.changeSearchBoxKeyword(keyword);

  //   if (_trim(keyword)) {
  //     this.props.searchDevice(
  //       accessToken,
  //       keyword,
  //     );
  //   } else {
  //     // empty keyword => reset search result
  //     this.props.resetResultOfSearchingDevice();
  //   }
  // }

  // @autobind
  // onClickSearchedDevice(deviceId, groupId) {
  //   // switch to group
  //   this.props.selectGroup(groupId);
  //   // a tiny delay to wait for rendering list
  //   setTimeout(() => {
  //     // show device
  //     this.props.showDeviceInfo(deviceId);
  //   }, 10);
  // }

  // @autobind
  // onClickDevice(id) {
  //   this.props.fetchDeviceInfo(id);
  //   this.props.showDeviceInfo(id);
  // }

  // @autobind
  // onRenameDevice(id, newName) {
  //   this.props.renameDevice(id, newName);
  // }

  // @autobind
  // onSelectedGroupChanged(id) {
  //   this.props.selectGroup(id);
  // }

  // @autobind
  // onRequestDeleteGroup() {
  //   const { selectedGroupId } = this.props;

  //   if (confirm('Delete this group? (All devices will be ungrouped)')) {
  //     this.props.deleteDeviceGroup(selectedGroupId);
  //   }
  // }

  // @autobind
  // onRequestUngroup() {
  //   const {
  //     accessToken,
  //     selectedGroup,
  //   } = this.props;
  //   const {
  //     selectedDeviceIdSet,
  //   } = this.state;

  //   if (selectedGroup) {
  //     const groupId = selectedGroup.get('id');
  //     const deviceIdListToUngroup = selectedDeviceIdSet.toArray();

  //     if (confirm('Ungroup selected devices?')) {
  //       this.props.ungroupDevices(
  //         accessToken,
  //         groupId,
  //         deviceIdListToUngroup
  //       );
  //     }
  //   }
  // }

  // @autobind
  // onRequestCreateGroup() {
  //   const {
  //     devices,
  //   } = this.props;
  //   const {
  //     selectedDeviceIdSet,
  //   } = this.state;

  //   // initialize group form
  //   this.setState({
  //     groupFormType: 'create',
  //     groupFormTitle: 'Create new group',
  //     groupFormActionBtnLabel: 'Create',
  //     groupFormGroupId: '',
  //     groupFormGroupName: '',
  //     groupFormScreenGroupId: null,
  //     groupFormItems: selectedDeviceIdSet.toArray().map(id => {
  //       const name = devices.getIn([ id, 'name' ]);
  //       return { id, name };
  //     }),
  //   }, () => {
  //     // show group form
  //     this.setState({
  //       isShowGroupForm: true,
  //     });
  //   });
  // }

  // @autobind
  // onRequestMoveGroup(groupId) {
  //   const {
  //     devices,
  //     groups,
  //   } = this.props;
  //   const {
  //     selectedDeviceIdSet,
  //   } = this.state;
  //   const groupName = groups.getIn([groupId, 'name']);
  //   const screenGroupId = groups.getIn([groupId, 'screengroupId']);
  //   const deviceIdList = groups.getIn([groupId, 'deviceIdList'])
  //     .toArray()
  //     .concat(selectedDeviceIdSet.toArray());

  //   // initialize group form
  //   this.setState({
  //     groupFormType: 'move',
  //     groupFormTitle: 'Move to group',
  //     groupFormActionBtnLabel: 'Move',
  //     groupFormGroupId: groupId,
  //     groupFormGroupName: groupName,
  //     groupFormScreenGroupId: screenGroupId,
  //     groupFormItems: deviceIdList.map(id => {
  //       const name = devices.getIn([ id, 'name' ]);
  //       return { id, name };
  //     }),
  //   }, () => {
  //     // show group form
  //     this.setState({
  //       isShowGroupForm: true,
  //     });
  //   });
  // }

  // @autobind
  // onClickActionBtnOfGroupForm(groupId, groupName, screenGroupId, deviceIdList) {
  //   const {
  //     accessToken,
  //   } = this.props;
  //   const {
  //     groupFormType,
  //   } = this.state;

  //   switch (groupFormType) {
  //     case 'create':
  //       this.props.createDeviceGroup(
  //         accessToken,
  //         groupName,
  //         screenGroupId,
  //         deviceIdList,
  //       );
  //       break;

  //     case 'move':
  //       this.props.moveDevicesToDeviceGroup(
  //         accessToken,
  //         groupId,
  //         groupName,
  //         screenGroupId,
  //         deviceIdList,
  //       );
  //   }
  // }

  // @autobind
  // onClickCancelBtnOfGroupForm() {
  //   this.setState({ isShowGroupForm: false });
  // }

  // @autobind
  // onCheckDevice(id) {
  //   const {selectedDeviceIdSet} = this.state;
  //   this.setState({
  //     selectedDeviceIdSet: selectedDeviceIdSet.add(id),
  //   });
  // }

  // @autobind
  // onUnCheckDevice(id) {
  //   const {selectedDeviceIdSet} = this.state;
  //   this.setState({
  //     selectedDeviceIdSet: selectedDeviceIdSet.delete(id),
  //   });
  // }

  // @autobind
  // onRequestRegister() {
  //   this.openRegisterDeviceDialog();
  // }

  // @autobind
  // onCancelRegisterDeviceForm() {
  //   this.closeRegisterDeviceDialog();
  // }

  // @autobind
  // onSubmitRegisterDeviceForm({ authCode, name, entityId }) {
  //   const {
  //     accessToken,
  //     registerDevice,
  //   } = this.props;
  //   this.closeRegisterDeviceDialog();
  //   registerDevice(
  //     accessToken,
  //     authCode,
  //     name,
  //     entityId
  //   );
  // }

  // @autobind
  // @debounce(300)
  // onGroupFormGroupNameChanged(name) {
  //   const {
  //     accessToken,
  //     checkDeviceGroupNameAvailability,
  //   } = this.props;
  //   const {
  //     groupFormGroupName,
  //   } = this.state;

  //   // when name is changed and different from default value,
  //   // check if new name is available
  //   if (
  //     name &&
  //     name !== groupFormGroupName
  //   ) {
  //     checkDeviceGroupNameAvailability(accessToken, name);
  //   }
  // }

  // @autobind
  // onGroupFormOpened() {
  //   this.props.resetResultOfCheckingDeviceGroupNameAvailability();
  // }

  render() {
    const {
      accessToken,
      pageTitle,
      deviceList,
      groups,
      entities,
      screenGroups,
      selectedGroupId,
      selectedGroup,
      isFetchingDevices,
      isSearchingDevice,
      searchedDeviceList,
      isNoDevice,
      deviceToShow,
      isFetchingDeviceInfo,
      isRenamingDevice,
      isFetchingDeviceGroups,
      isCreatingDeviceGroup,
      isUngroupingDevices,
      isDeletingDeviceGroup,
      isCheckingDeviceGroupNameAvailability,
      resultOfCheckingDeviceGroupNameAvailability,
      deactivateDevice,
    } = this.props;

    const {
      selectedDeviceIdSet,
      groupFormTitle,
      groupFormActionBtnLabel,
      groupFormGroupId,
      groupFormGroupName,
      groupFormScreenGroupId,
      groupFormItems,
      isShowGroupForm,
      isShowRegisterDeviceDialog,
    } = this.state;

    const layout = (
      <Box className="grid_layout" direction="row">
        <GroupMenu
          defaultGroupLabel="Ungrouped"
          groups={groups}
          selectedGroupId={selectedGroupId}
          onSelectedIndexChanged={this.onSelectedGroupChanged}
        />
        <DeviceList
          deviceToShow={deviceToShow}
          deviceList={deviceList}
          selectedGroup={selectedGroup}
          selectedDeviceIdSet={selectedDeviceIdSet}
          enableMultipleSelect={true}
          onClickDevice={this.onClickDevice}
          onCheckDevice={this.onCheckDevice}
          onUncheckDevice={this.onUnCheckDevice}
        />
        <DeviceInfo
          accessToken={accessToken}
          device={deviceToShow}
          deactivateDevice={deactivateDevice}
          isFetchingDeviceInfo={isFetchingDeviceInfo}
          isRenamingDevice={isRenamingDevice}
          onRenameDevice={this.onRenameDevice}
        />
      </Box>
    );

    const noDevice = (
      <NoDevice
        onClickRefresh={() => { this.fetchData(); }}
      />
    );

    const isShowLoading = Boolean(isFetchingDevices || isFetchingDeviceGroups);
    const groupsWithoutSelected = groups.filter(group => {
      return group.get('id') !== selectedGroupId;
    });
    const hasSelectedGroup = Boolean(selectedGroupId);
    const hasGroupsWithoutSelected = groupsWithoutSelected.size > 0;
    const hasSelectedDevice = selectedDeviceIdSet.size > 0;
    const noSelectedDevice = !Boolean(hasSelectedGroup);
    const isShowCreateGroupBtn = hasSelectedDevice;
    const isShowMoveGroupBtn = Boolean(
      noSelectedDevice &&
      hasGroupsWithoutSelected &&
      hasSelectedDevice
    );
    const isShowDeleteGroupBtn = Boolean(selectedGroupId);
    const isShowUngroupBtn = Boolean(
      hasSelectedGroup &&
      hasSelectedDevice
    );

    return (
      <div id="devices">
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
}
