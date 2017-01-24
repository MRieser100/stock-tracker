import holdingsTemplate from './controllers/holdings.html';
import YahooQuoteService from './services/yahoo-quote-service';

function routesConfig($stateProvider, $urlRouterProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/');
  $stateProvider
    // TODO: Need preliminary state(s) here for initial 'splash'/home page & user login
    .state('holdings', {
      url: '/',
      controller: 'HoldingsController as vm',
      template: holdingsTemplate,
      resolve: {
        currentQuoteData: ($stateParams, YahooQuoteService) => {
          'ngInject';          
          console.log($stateParams.userHoldings);          
          return YahooQuoteService.search(['SCHB', 'SCHD', 'SCHF', 'SCHE']);
          // return YahooQuoteService.search($stateParams.userHoldings); // TODO: need to call ProfileService to get username + userHoldings for YahooQuoteService
        },
      },
    })  
}

export default routesConfig;
