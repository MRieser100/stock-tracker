import homeTemplate from './controllers/home.html';
import YahooQuoteService from './services/yahoo-quote-service';

function routesConfig($stateProvider, $urlRouterProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      controller: 'HomeController as vm',
      template: homeTemplate,
      resolve: {
        currentQuoteData: ($stateParams, YahooQuoteService) => {
          'ngInject';          
          console.log($stateParams.userHoldings);          
          return YahooQuoteService.search(['SCHB', 'AAPL']);
          // return YahooQuoteService.search($stateParams.userHoldings); // TODO: need to call ProfileService to get username + userHoldings for YahooQuoteService
        },
      },
    })  
}

export default routesConfig;
