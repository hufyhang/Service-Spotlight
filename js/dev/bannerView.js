define(function () {
    "use strict";
    var banner = Ribs.View.make({
        el: $('#result-container'),
        defaults: {
            keywords: null
        },
        render: function () {
            // var html = "<div id='result-banner'><input type='text' id='result-input' class='form-control' value='" +
                // this.get('keywords') + "' /><div class='btn btn-primary' id='result-btn'>Search</div></div>";
            var html = "<div id='result-banner'><a href='#home'><div class='btn btn-default' id='back-btn'><i class='fa fa-home back-icon'></i>Back</div></a></div>";
            this.el.html(html);
        }
    });

    return {
        Banner: banner
    };
});
