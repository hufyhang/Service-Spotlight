require(["resultView"],function(e){console.log("$$\\\\   $$\\ $$$$$$$$\\ $$\\      $$\\ $$\\      $$$$$$$\\  "),console.log("$$ |  $$ |\\__$$  __|$$$\\    $$$ |$$ |     $$  ____| "),console.log("$$ |  $$ |   $$ |   $$$$\\  $$$$ |$$ |     $$ |      "),console.log("$$$$$$$$ |   $$ |   $$\\$$\\$$ $$ |$$ |     $$$$$$$\\  "),console.log("$$  __$$ |   $$ |   $$ \\$$$  $$ |$$ |     \\_____$$\\ "),console.log("$$ |  $$ |   $$ |   $$ |\\$  /$$ |$$ |     $$\\   $$ |"),console.log("$$ |  $$ |   $$ |   $$ | \\_/ $$ |$$$$$$$$\\\\$$$$$$  |"),console.log("\\__|  \\__|   \\__|   \\__|     \\__|\\________|\\______/");var t=Ribs.make(e.View),n=Ribs.Router.route({home:function(){$("#home-container").css("display","initial"),$("#result-container").css("display","none"),$("#home-input").val("")},search:function(){t.render(),$("#home-container").css("display","none"),$("#result-container").css("display","initial")}});$("#search-btn").on("click",function(){$("#home-input").val().length===0||$("#home-input").val().trim().length===0?console.log("No inputs!!!"):n.navigate("search")}),$("#home-input").on("keypress",function(e){e.keyCode===13&&$("#search-btn").click()}),n.navigate("home")});