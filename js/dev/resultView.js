define(['result', 'bannerView'], function (Result, BannerView) {
    "use strict";
    var result = Ribs.make(Result.Result),
        view = null,
        element = $('#result-container'),
        banner = Ribs.make(BannerView.Banner);

    view = Ribs.View.make({
        el: element,
        template: $('#search-template').html(),
        initialize: function () {
            console.log('Ribs.View ready.');
        },
        render: function () {
            var keys = $('#home-input').val();
            $(document).attr('title', keys + ' - Service Spotlight');

            keys = keys.replace(/\'/g, "\\\'");
            keys = keys.replace(/%/g, "\\%");
            // reset Result Model
            result.set({
                status: 0,
                data: []
            });
            // element.html('');
            banner.set({keywords: keys});
            banner.render();

            result.fetch({
                data: {
                    keywords: keys
                },
                done: function (data) {
                    $('#loading-spinner, #hints').css('display', 'none');
                    result.set({status: data.status, data: data.data});
                    if (parseInt(result.get('status'), 10) === 200) {
                        var dataset = result.get('data');
                        console.log('Total: ' + dataset.length);
                        view.el.append(_.template(view.template, {data: dataset}));
                    }
                }
            });
        }
    });

    return {
        View: view
    };
});
