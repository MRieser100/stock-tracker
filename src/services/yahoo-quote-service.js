function YahooQuoteService($http, $q) {
    'ngInject';    

    function _responseTransformer(response) {          
        const quoteResults = response.data.query.results.quote;                                      
        return {
            symbol: quoteResults.symbol,
            name: quoteResults.Name,
            change: quoteResults.Change,
            yearLow: quoteResults.YearLow,
            yearHigh: quoteResults.YearHigh,
            lastTradePrice: quoteResults.LastTradePriceOnly,
            changeFromYearLow: quoteResults.ChangeFromYearLow,
            changeFromYearHigh: quoteResults.ChangeFromYearHigh,
            changeFromTwoHndDayMovingAvg: quoteResults.ChangeFromTwoHundreddayMovingAverage
        }
    }

    function _getQueryString(symbol) {  
              
        const fields = ['symbol', 'Name', 'Change', 'YearLow', 'YearHigh', 'LastTradePriceOnly', 
                        'changeFromYearLow', 'ChangeFromYearHigh', 'ChangeFromTwoHundreddayMovingAverage'];
        
        return `select ${fields.join(', ')} from yahoo.finance.quotes where symbol in ("${symbol}")`; 
    };

    function _getSymbolQuote(symbol) {        
        const store = 'store://datatables.org/alltableswithkeys';

        return $http.get('https://query.yahooapis.com/v1/public/yql', {params: {q: _getQueryString(symbol), format: 'json', env: store, callback: ''}})
            .then(_responseTransformer)
            .catch((error) => $q.reject(error.data.message));            
    }
    
    function search(symbols) {                      
        symbols = !Array.isArray(symbols) ? symbols.split() : symbols;

        // $q.all will complete once mapped promise objects for symbol(s) are resolved        
        return $q.all(symbols.map( (symbol) => _getSymbolQuote(symbol) )).then( (results) => { return results; } );        
    }

    return {
        search,
    };
}

export default YahooQuoteService;
