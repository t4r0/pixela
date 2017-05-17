'use strict';
import HelloWorld from './controllers/hello-world';

const routes = (app, config) => {
  app.route('/').get(HelloWorld);
}

export default routes;
