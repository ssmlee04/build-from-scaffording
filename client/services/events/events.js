const request = require('superagent');
const eventModel = require('./../../models/event');

module.exports = (() => {
  return {
    get: () => {
      return request
        .get('https://forgetful-elephant.herokuapp.com/events')
        .then(res => {
          eventModel.set(JSON.parse(JSON.stringify(res.body)));
        });
    },
    create: info => {
      console.log(info)
      return request
        .post('https://forgetful-elephant.herokuapp.com/events')
        .send(info)
        .then(res => {
          eventModel.add(JSON.parse(JSON.stringify(res.body)));
        });
    },
    update: (id, info) => {
      return request
        .put(`https://forgetful-elephant.herokuapp.com/events/${id}`)
        .send(info)
        .then(res => {
          eventModel.save(id, JSON.parse(JSON.stringify(res.body)));
        });
    },
    delete: id => {
      return request
        .delete(`https://forgetful-elephant.herokuapp.com/events/${id}`)
        .then(res => {
          eventModel.delete(id);
        });
    },
  };
})();
