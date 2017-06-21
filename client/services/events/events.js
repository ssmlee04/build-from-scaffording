const request = require('superagent');
// const eventModel = require('./../../models/events');
const eventModel = require('./../../models/event')
console.log(eventModel)

module.exports = (() => {
  return {
    get: () => {
      return request.get('https://forgetful-elephant.herokuapp.com/events')
      .then((res) => {
        console.log(JSON.parse(JSON.stringify(res.body)))
        eventModel.set(JSON.parse(JSON.stringify(res.body)))
          // return JSON.parse(JSON.stringify(res.body))
      });
    },
    create: (info) => {
    return request.post('https://forgetful-elephant.herokuapp.com/events')
      .send(info)
      .then((res) => {
        eventModel.set([])
          // return JSON.parse(JSON.stringify(res.body))
      });
    }
  };
})();


