import holdingsTemplate from './controllers/holdings.html';
import homeTemplate from './controllers/home.html';
import YahooQuoteService from './services/yahoo-quote-service';

function routesConfig($stateProvider, $urlRouterProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/');
  $stateProvider
    // TODO: Need preliminary state(s) here for initial 'splash'/home page & user login
    .state('holdings', {
      url: '/',
      controller: 'HomeController as vm',
      template: homeTemplate,
      resolve: {        
        accountsData: ($stateParams, $http, $q, YahooQuoteService) => {
          'ngInject';        
          // TODO: Extract into ProfileService class - 'q' param would ideally be extracted from User Authentication Page  
          return $http.get('/localDb/users', {q: 'Michael Rieser'})
            .then(function(response){                            
              return response.data.map( (user) => {
                  let userName = user.fullName;
                  let userAccounts = user.accounts;                

                  return $q.all(userAccounts.map( (acct) => {                  
                    return { name: acct.name, holdingsStatus: YahooQuoteService.search(acct.holdings) };
                  }));        
                });
              });
        },
      },
    })  
}

export default routesConfig;
