exports.register = function(server, options, next) {

  server.route({
    method: 'GET',
    path: '/',
    config: {
      description: 'home page',
      handler: {
        view: {
          template: 'home'
        }
      }
    }

  });

  return next();
};

exports.register.attributes = {
  name: 'Resorts'
};