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
        '"Mama always said life was like a box of chocolates. You never know what you\'re gonna get." - Forrest Gump',
        '“Nothing is impossible, the word itself says ‘I’m possible’!” - Audrey Hepburn',
        '“It\'s the imperfections that make things beautiful” ― Jenny Han, The Summer I Turned Pretty',
        '“A wise man can learn more from a foolish question than a fool can learn from a wise answer.” ― Bruce Lee',
        '“Yeah, well. I don’t try to be awesome. It just comes natural.” ― Rick Riordan, The Lost Hero',
        '“Only God is awesome.” ― Shane Claiborne',
        '“You are the sun, and I\'m the moon. In your shadow I can shine.” ― Tokio Hotel',
        '“unless someone like you comes around, things will never change.” ― Dr. Seuss',
        '“It\'s not how you pick your nose, it\'s where you put that booger that counts.” ― Tre Cool',
        '“There is no short-cut to awesome.” ― Zoe Winters',
        '“Your time has come to pick the road you walk in this tale.” ― Claudio Sanchez',
        '“Do I want to change the world? To a certain extent yeah. It needs to be changed... it needs a kick up the ass.” ― Green Day',
        '“Old words are reborn with new faces.” ― Criss Jami',
        '“Plus my boots were made of awesome.” ― Gwen Hayes, Let Me Call You Sweetheart',
        '“Never give up. Dare to Dream. Dare to believe.” ― Stacey T. Hunt',
        '“Never underestimate the power of you.” ― unknown wise person',
        '“Make it bigger, make it badder, make it awesome!” ― Duff Goldman',
        '“Never doubt the power of WWW.” ― Feifei Hang',
        '“Big things have small beginnings.” ― Prometheus'
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
