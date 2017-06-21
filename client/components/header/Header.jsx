const React = require('react');
const CreateClass = require('create-react-class');

const Header = CreateClass({
  render: function() {
    var { pageTitle } = this.props;
    return (
      <div>
        <span>{pageTitle}</span>
        {this.props.children}
      </div>
    );
  },
});

module.exports = Header;
