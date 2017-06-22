const React = require('react');
const CreateClass = require('create-react-class');
const cx = require('classnames');

const EventListTab = CreateClass({
  render: function() {
    var { event = {}, isSelected } = this.props;
    return (
      <div
        className={cx({
          eventSelected: isSelected,
        })}
        onClick={() => this.props.onClick(event)}
      >
        <img
          src={event.icon || 'assets/images/icon-person-128.png'}
          style={{ width: 50, height: 50 }}
        />
        <span>{event.title}</span>
        <span>{event.icon}</span>
      </div>
    );
  }
});

module.exports = EventListTab;
