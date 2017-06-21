const React = require('react');
import Modal from 'react-modal';
const CreateClass = require('create-react-class');

const LoadingMask = CreateClass({
  render: function(){
    const { show } = this.props;

    return (<Modal
      isOpen={show}
      contentLabel={'label'}
    >
      {this.props.children}
    </Modal>);
  },
});

module.exports = LoadingMask;
