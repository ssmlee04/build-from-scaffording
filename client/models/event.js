var store = require('store');
var _ = require('lodash');

module.exports = exports = new function(key) {
  this.key = key;
  this.eventToShow;
  this.events = store.get(key) || [];
  this.titleToSearch = '';
  this.onChanges = [];

  this.subscribe = function(onChange) {
    this.onChanges.push(onChange);
  };

  this.all = function() {
    return this.events;
  };

  this.allFiltered = function() {
    return this.all().filter(d => {
      return d.title.indexOf(this.titleToSearch) > -1;
    });
  };

  this.setTitleFilter = function(d) {
    this.titleToSearch = d;

    this.inform();
  };

  this.getEventToShow = function() {
    return this.eventToShow;
  };

  this.setEventToShow = function(event) {
    this.eventToShow = event;

    this.inform();
  };

  this.inform = function() {
    store.set(this.key, this.events);

    this.onChanges.forEach(function(cb) {
      cb();
    });
  };

  this.set = function(events) {
    this.events = events;

    this.inform();
  };

  this.delete = function(id) {
    this.events = this.events.filter(function(d) {
      return d.id !== id;
    });
    this.eventToShow = {};

    this.inform();
  };

  this.add = function(info) {
    this.events = this.events.concat([info]);

    this.inform();
  };

  this.destroy = function(event) {
    this.events = this.events.filter(function(candidate) {
      return candidate !== event;
    });

    this.inform();
  };

  this.save = function(eventToSave, info) {
    this.events = this.events.map(function(event) {
      return event !== eventToSave ? event : _.extend({}, event, info);
    });

    this.inform();
  };
}('events');
