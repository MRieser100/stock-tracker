import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routesConfig from './routes-config';
import HomeController from './controllers/home-controller';
import YahooQuoteService from './services/yahoo-quote-service';

const lab11App = angular.module('stock-tracker-app',
  [
    uiRouter,
  ])
  .controller('HomeController', HomeController)
  .factory('YahooQuoteService', YahooQuoteService)
  .config(routesConfig)
  .config(['$qProvider', function ($qProvider) {
    // Workaround for ng 1.5.9 + ui-router 2.1.x bug that results in 4 'Possibly unhandled rejection {}' errors
    //  See: https://github.com/angular-ui/ui-router/issues/2889
    $qProvider.errorOnUnhandledRejections(false);
}]);

export default lab11App.name
