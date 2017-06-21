const React = require('react');
const CreateClass = require('create-react-class');
const cx    = require('classnames');

const EventList = CreateClass({
  onClickEvent: function(event) {
    this.props.onClickEvent(event)
  },
  render: function(){
    const { events, eventToShow } = this.props;
console.log(eventToShow)
    return <div>
      {events.map((d, i) => {
        return <div key={i} className={cx({eventSelected: eventToShow && eventToShow.id === d.id})} onClick={() => this.onClickEvent(d)}>
          <img src={d.icon} style={{width: 50, height: 50}}/>
          <span>{d.icon}</span>
        </div>
      })}
    </div>
  },
});

module.exports = EventList;
