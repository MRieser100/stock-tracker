// Note: $q library is utilized to handle promises
function HomeController($q, $state, currentQuoteData) {
  'ngInject';  

  const vm = this;  
  // TODO-B: Implement ProfileService + user authentication and set username + userHoldings dynamically
  vm.username = 'Michael Rieser';  
  vm.userHoldings = ['SCHB', 'SCHD', 'SCHE', 'SCHF'];  
    
  vm.currentQuotes = currentQuoteData   

  // vm.handleKeyup = (event) => {
  //   if (event.keyCode === 13) {
  //     vm.handleSearch();
  //   }
  // };

  // vm.handleSearch = () => {
  //   $state.go('search');
  // };
}

export default HomeController;
