const React = require('react');
import Modal from 'react-modal';
const CreateClass = require('create-react-class');

const customStyles = {
  content: {
    top: '30%',
    left: '30%',
    right: '30%',
    bottom: 'auto',
    // transform: 'translate(-50%, -50%)'
  }
};

const LoadingMask = CreateClass({
  render: function() {
    const { show } = this.props;

    return (
      <Modal isOpen={show} style={customStyles} contentLabel={'label'}>
        {this.props.children}
      </Modal>
    );
  }
});

module.exports = LoadingMask;
