const React = require('react');
import Modal from 'react-modal';
const CreateClass = require('create-react-class');

const LoadingMask = CreateClass({
  render: function(){
    const { show } = this.props;

    return (<Modal
        isOpen={show}
        // onAfterOpen={afterOpenFn}
        // onRequestClose={requestCloseFn}
        // closeTimeoutMS={n}
        // style={customStyle}
        contentLabel="Modal"
      >
        <h1>Loading stuff</h1>
        <p>...</p>
      </Modal>);
    
  },
});

module.exports = LoadingMask;
