const express = require('express');
const app = express();
app.use(express.static(__dirname + '/build'));

const templateFn = require('./client/template.js');
const render = require('vitreum/steps/render');

app.get('*', (req, res) => {
  render('main', templateFn, {
    url: req.url,
  })
  .then(page => res.send(page))
  .catch(err => res.status(500).send(err.toString()));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server on port:${PORT}`);
});


