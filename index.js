var Hapi = require('hapi');
var Hoek = require('hoek');
var Home = require('./lib/home');

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.views({
  engines: {
    jsx: require('hapi-react-views')
  },
  relativeTo: __dirname,
  path: 'views'
});

server.register([Home], function(err) {
  Hoek.assert(!err, err);
})

server.start(function(err) {

  Hoek.assert(!err, err);
  console.log('Server started at: ' + server.info.uri);
})