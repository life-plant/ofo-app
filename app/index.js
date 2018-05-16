// Angular & Router ES6 Imports
import angular from 'angular';
import angularUIRouter from 'angular-ui-router';
// import $ from 'jquery';
import appComponents from './components/components.js';
import commonComponents from './common/components.js';
import appServices from './services/services.js';
import appFilter from './filter/index.js';
import appConfiguration from './app.config';
import 'footable';

//import 'footable-bootstrap/js/footable.js'

// Single Style Entry Point
import 'index.scss';
import 'footable/css/footable.core.css';
//import 'vendor/footable-bootstrap/css/footable.bootstrap.min.css';
//import "font-awesome/css/font-awesome.min.css";


// window.$ = $;

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

appFilter(app);

app.run(function($state, loginService, $rootScope) {

  $state.go('login');

});

// Router Configuration
// Components must be declared first since
// Routes reference controllers that will be bound to route templates.
// appConfiguration(app);
