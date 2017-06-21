const React = require('react');
const CreateClass = require('create-react-class');
// const _     = require('lodash');
// const cx    = require('classnames');

const Header = CreateClass({
  render: function(){
	var { pageTitle } = this.props
    return (<div id='header'>
          {pageTitle}
      </div>
    );
  },
});

module.exports = Header;
