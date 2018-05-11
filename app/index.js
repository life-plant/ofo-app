// Angular & Router ES6 Imports
import angular from 'angular';
import angularUIRouter from 'angular-ui-router';
import $ from 'jquery';
import appComponents from './components/components.js';
import commonComponents from './common/components.js';
import appServices from './services/services.js';
import appConfiguration from './app.config';

// Single Style Entry Point
import 'index.scss';
//import "font-awesome/css/font-awesome.min.css";


window.$ = $;

if (ENVIRONMENT === 'test') {
  console.log('ENV:', ENVIRONMENT);
  require('angular-mocks/angular-mocks');
}

const app = angular.module('app', ['ui.router']);

// Components Entrypoint
appComponents(app);

// Common Components Entrypoint
commonComponents(app);

// App Services Entrypoint
appServices(app);

app.run(function($state,loginService) {
  console.log('aaa');
  console.log(loginService);
  $state.go('login');
});

// Router Configuration
// Components must be declared first since
// Routes reference controllers that will be bound to route templates.
// appConfiguration(app);
