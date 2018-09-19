const path = require('path');
const fs = require('fs');
const { readdirSync, statSync } = require('fs');
const { join } = require('path');


const express = require('express');
const app = express();
const port = 3000;

const spaces = require('./spaces.json');
const appKeys = (p => readdirSync(p).filter(f => statSync(join(p, f)).isDirectory()))(path.join(__dirname, 'apps'));

app.get('rest/plerion/spaces', function (req, res) {
  res.send(spaces);
});

spaces.forEach(space => {
  const indexHtml = path.join(__dirname, 'apps', space.app, 'index.html');
  if (fs.existsSync(indexHtml)) {
    app.get(space.route, function (req, res) {
      res.sendFile(indexHtml);
    });
  }
});

appKeys.forEach(appKey => {
  const restRouter  = path.join(__dirname, 'apps', appKey, 'router.js');
  if (fs.existsSync(restRouter)) {
    app.use('/app/' + appKey, require(restRouter));
  }
});

app.listen(port, () => console.log(`Plerion listening on port ${port}!`));