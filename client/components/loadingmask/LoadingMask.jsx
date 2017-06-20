const React = require('react');
const CreateClass = require('create-react-class');

const LoadingMask = CreateClass({
  render: function(){
    // const { show } = this.props;
    const show = true;

    return (
      <Modal
        isOpen={show}
        // onAfterOpen={afterOpenFn}
        // onRequestClose={requestCloseFn}
        // closeTimeoutMS={n}
        // style={customStyle}
        contentLabel="Modal"
      >
        <h1>Modal Content</h1>
        <p>Etc.</p>
      </Modal>
    );
  },
});

module.exports = LoadingMask;




// import React from 'react';
// import pure from 'recompose/pure';
// import Center from 'react-center';
// import RefreshIndicator from 'material-ui/RefreshIndicator';

// const CENTER_BOX_STYLE = {
//   position:'absolute',
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   zIndex: 999,
// };
// const CENTER_BOX_STYLE_HIDE = {
//   ...CENTER_BOX_STYLE,
//   display: 'none',
// };
// const REFRESH_INDICATOR_STYLE = {
//   // overwrite style of RefreshIndicator component
//   position:'static',
//   transform: '',
// };

// @pure
// export default class extends React.Component {
//   static displayName = 'LoadingMask';
//   static propTypes = {
//     show: React.PropTypes.bool.isRequired,
//   };

//   render() {
//     const { show } = this.props;

//     return (
//       <Center style={ !!show ? CENTER_BOX_STYLE : CENTER_BOX_STYLE_HIDE }>
//         <RefreshIndicator
//           size={50}
//           top={0} // trivial value, only to avoid warning of RefreshIndicator
//           left={0}  // trivial value, only to avoid warning of RefreshIndicator
//           status='loading'
//           style={REFRESH_INDICATOR_STYLE}
//         />
//       </Center>
//     );
//   }
// }
