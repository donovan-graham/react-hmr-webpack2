const express = require('express');
const { resolve } = require('path');

let fs = require('fs');
let distPath = resolve(__dirname, 'dist');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const webpackConfig = require('./webpack.config');

  const publicPath = webpackConfig.output.publicPath;
  distPath = webpackConfig.output.path;

  const wpCompiler = webpack(webpackConfig);
  const wpDevMiddleware = webpackDevMiddleware(wpCompiler, { publicPath });
  const wpHotMiddleware = webpackHotMiddleware(wpCompiler)

  app.use([wpDevMiddleware, wpHotMiddleware]);

  // use in-memory file-system
  fs = wpDevMiddleware.fileSystem;
}


app.get('*', (req, res) => {
  const html = fs.readFileSync(`${distPath}/index.html`, 'utf8');
  const timestamp = new Date().toUTCString();
  const meta = `
  <meta name="x-generated-at" content="${timestamp}">
  `;
  res.send(html.replace(/([\t\s]*<\/head>)/i, `${meta}$1`));
});


app.listen(3000, function () {
  console.log("Listening on port 3000");
});
