// var app = {};
var store = require('store')
var _ = require('lodash')

module.exports = exports = new (function (key) {
    'use strict';

    // app.model = function (key) {
        this.key = key;
        this.eventToShow
        this.events = store.get(key) || []
        this.onChanges = [];
    // };

    this.subscribe = function (onChange) {
        console.log('subscribed....')
        console.log(onChange)
     this.onChanges.push(onChange);
    };

    this.all = function() {
        return this.events
    }

    this.getEventToShow = function() {
        return this.eventToShow
    }

    this.setEventToShow = function(event) {
        this.eventToShow = event

        this.inform();
    }

    this.inform = function () {
        store.set(this.key, this.events);
        console.log('informed..')
        console.log(this.events.length)
        this.onChanges.forEach(function (cb) { 
            console.log(cb)
            cb(); 
        });
    };

    this.set = function (events) {
        this.events = events
        this.inform();
    };

    this.add = function (info) {
        this.events = this.events.concat([info]);

        this.inform();
    };

    // this.toggleAll = function (checked) {
    //  // Note: it's usually better to use immutable data structures since they're
    //  // easier to reason about and React works very well with them. That's why
    //  // we use map() and filter() everywhere instead of mutating the array or
    //  // event items themselves.
    //  this.events = this.events.map(function (event) {
    //      return Utils.extend({}, event, {completed: checked});
    //  });

    //  this.inform();
    // };

    // this.toggle = function (eventToToggle) {
    //  this.events = this.events.map(function (event) {
    //      return event !== eventToToggle ?
    //          event :
    //          Utils.extend({}, event, {completed: !event.completed});
    //  });

    //  this.inform();
    // };

    this.destroy = function (event) {
        this.events = this.events.filter(function (candidate) {
            return candidate !== event;
        });

        this.inform();
    };

    this.save = function (eventToSave, info) {
        this.events = this.events.map(function (event) {
            return event !== eventToSave ? event : _.extend({}, event, info);
        });

        this.inform();
    };

    // this.clearCompleted = function () {
    //  this.events = this.events.filter(function (event) {
    //      return !event.completed;
    //  });

    //  this.inform();
    // };

})('events');