// @wip - not fully implemented, as it only works for single stocks. See: http://dev.markitondemand.com/MODApis/#stockquote
function MarkitQuoteService($http, $q) {
    'ngInject';

    function getStockQuote(tickersymbol) {
        return $http.get('http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp', {params: {symbol: ticker}})
            .then((response) => response.data)
            .catch((error) => $q.reject(error.data.message))
    }

    return {
        getQuote,
    };
}

export default MarkitQuoteService;