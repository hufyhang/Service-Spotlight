define(function () {
    "use strict";
    var Result = Ribs.Model.make({
        defaults: {
            status: 0,
            data: {}
        },
        initialize: function () {
            console.log('Ribs.Model ready.');
        },
        fetch: {
            url: 'http://feifeihang.info/spotlight/php/search.php',
            method: 'post'
        }

    });

    return {
        Result: Result
    };
});
