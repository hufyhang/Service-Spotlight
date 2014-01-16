require(['resultView'], function (resultView) {
    "use strict";

    consoel.log('$$\\\\   $$\\ $$$$$$$$\\ $$\\      $$\\ $$\\      $$$$$$$\\  ');
    consoel.log('$$ |  $$ |\\__$$  __|$$$\\    $$$ |$$ |     $$  ____| ');
    consoel.log('$$ |  $$ |   $$ |   $$$$\\  $$$$ |$$ |     $$ |      ');
    consoel.log('$$$$$$$$ |   $$ |   $$\\$$\\$$ $$ |$$ |     $$$$$$$\\  ');
    consoel.log('$$  __$$ |   $$ |   $$ \\$$$  $$ |$$ |     \\_____$$\\ ');
    consoel.log('$$ |  $$ |   $$ |   $$ |\\$  /$$ |$$ |     $$\\   $$ |');
    consoel.log('$$ |  $$ |   $$ |   $$ | \\_/ $$ |$$$$$$$$\\\\$$$$$$  |');
    consoel.log('\\__|  \\__|   \\__|   \\__|     \\__|\\________|\\______/');


    var view = Ribs.make(resultView.View);

    var router = Ribs.Router.route({
        'home': function () {
            $('#home-container').css('display', 'initial');
            $('#result-container').css('display', 'none');
            $('#home-input').val('');
        },
        'search': function () {
            // view.render();
            $('#home-container').css('display', 'none');
            $('#result-container').css('display', 'initial');
        }
    });

    // register events
    $('#search-btn').on('click', function () {
        if ($('#home-input').val().length === 0) {
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

    router.navigate('home');
});
