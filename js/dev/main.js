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


    var view = Ribs.make(resultView.View);

    var router = Ribs.Router.route({
        'home': function () {
            $('#home-container').css('display', 'initial');
            $('#result-container').css('display', 'none');
            $('#home-input').val('').css('background-color', '').focus();
            $(document).attr('title', 'Service Spotlight');
            $('body').css('background-image', '');
            $('#logo-text').css('visibility', 'visible');
            $('#copyright').css('visibility', 'visible');
        },
        'search': function () {
            view.render();
            $('#home-container').css('display', 'none');
            $('#result-container').css('display', 'initial');
            $('body').css('background-image', '');
        },
        'awesome': function () {
            $('body').css('background-image', 'url("img/keep_calm.jpg")').css('background-size', 'cover');
            $('#logo-text').css('visibility', 'hidden');
            $('#home-input').css('background-color', 'rgba(255, 255, 255, 0.5)');
            $('#copyright').css('visibility', 'hidden');
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
