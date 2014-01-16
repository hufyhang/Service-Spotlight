define(['result'], function (Result) {
    "use strict";
    var resultModel = Result.Result,
        Results = Ribs.Collection.make({
            defaults: {
                keywords: ''
            },
            model: resultModel,
            initialize: function () {
                console.log('Ribs.Collection ready');
            },
            fetch: {
                url: 'http://feifeihang.info/spotlight/php/search.php',
                method: 'post'
            }
        });

    return {
        Results: Results
    };
});
