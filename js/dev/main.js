require(['resultView'], function (resultView) {
    "use strict";

    console.log('$$\\\\   $$\\ $$$$$$$$\\ $$\\      $$\\ $$\\      $$$$$$$\\  ');
    console.log('$$ |  $$ |\\__$$  __|$$$\\    $$$ |$$ |     $$  ____| ');
    console.log('$$ |  $$ |   $$ |   $$$$\\  $$$$ |$$ |     $$ |      ');
    console.log('$$$$$$$$ |   $$ |   $$\\$$\\$$ $$ |$$ |     $$$$$$$\\  ');
    console.log('$$  __$$ |   $$ |   $$ \\$$$  $$ |$$ |     \\_____$$\\ ');
    console.log('$$ |  $$ |   $$ |   $$ |\\$  /$$ |$$ |     $$\\   $$ |');
    console.log('$$ |  $$ |   $$ |   $$ | \\_/ $$ |$$$$$$$$\\\\$$$$$$  |');
    console.log('\\__|  \\__|   \\__|   \\__|     \\__|\\________|\\______/');

    var quotes = [
        'Keep calm & carry on, dude!',
        'Hustle up, man!',
        'You rock, bro!',
        'You are too cool, man!',
        '“love the life you live. live the life you love.” ― Bob Marley',
        '"Mama always said life was like a box of chocolates. You never know what you\'re gonna get." - Forrest Gump'
    ];

    /**
     * Returns a random integer between min and max
     * Using Math.round() will give you a non-uniform distribution!
     */
    var getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var view = Ribs.make(resultView.View);

    var router = Ribs.Router.route({
        'home': function () {
            $('#logo-text').html('Service&nbsp;<i class="fa fa-cloud fa-2x"></i>&nbsp;Spotlight');
            $('#home-container').css('display', 'initial');
            $('#result-container').css('display', 'none');
            $('#home-input').val('').css('background-color', '').focus();
            $(document).attr('title', 'Service Spotlight');
        },
        'search': function () {
            var html = '<div id="loading-spinner"><i class="fa fa-spinner fa-spin fa-5x"></i> Loading magic...</div>';
            view.render();
            $('#home-container').css('display', 'none');
            $('#result-container').css('display', 'initial');
            $('#result-container').append(html);
            // $('body').css('background-image', '');
        },
        'awesome': function () {
            var quote = quotes[getRandomInt(0, quotes.length - 1)];
            $('#logo-text').html(quote);
        }
    });

    // register events
    $('#search-btn').on('click', function () {
        if ($('#home-input').val().length === 0 || $('#home-input').val().trim().length === 0) {
            console.log('No inputs!!!');
        } else {
            router.navigate('search');
        }
    });

    $('#home-input').on('keypress', function (e) {
        if (e.keyCode === 13) {
            $('#search-btn').click();
        }
    });

    $('#awesome-btn').on('click', function () {
        router.navigate('awesome');
    });

    router.navigate('home');
});
