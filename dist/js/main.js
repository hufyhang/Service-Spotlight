define("result",[],function(){var e=Ribs.Model.make({defaults:{status:0,data:{}},initialize:function(){console.log("Ribs.Model ready.")},fetch:{url:"http://feifeihang.info/spotlight/php/search.php",method:"post"}});return{Result:e}}),define("bannerView",[],function(){var e=Ribs.View.make({el:$("#result-container"),defaults:{keywords:null},render:function(){var e="<div id='result-banner'><a href='#home'><div class='btn btn-primary id='back-btn'><i class='fa fa-home back-icon'></i>Back</div></a></div>";this.el.html(e)}});return{Banner:e}}),define("resultView",["result","bannerView"],function(e,t){var n=Ribs.make(e.Result),r=null,i=$("#result-container"),s=Ribs.make(t.Banner);return r=Ribs.View.make({el:i,template:$("#search-template").html(),initialize:function(){console.log("Ribs.View ready.")},render:function(){var e=$("#home-input").val();e=e.replace(/\'/g,"\\'"),n.set({status:0,data:[]}),s.set({keywords:e}),s.render(),n.fetch({data:{keywords:e},done:function(e){n.set({status:e.status,data:e.data});if(parseInt(n.get("status"),10)===200){var t=n.get("data");r.el.append(_.template(r.template,{data:t}))}}})}}),{View:r}}),require(["resultView"],function(e){var t=Ribs.make(e.View),n=Ribs.Router.route({home:function(){$("#home-container").css("display","initial"),$("#result-container").css("display","none"),$("#home-input").val("")},search:function(){t.render(),$("#home-container").css("display","none"),$("#result-container").css("display","initial")}});$("#search-btn").on("click",function(){$("#home-input").val().length===0?console.log("No inputs!!!"):n.navigate("search")}),$("#home-input").on("keypress",function(e){e.keyCode===13&&$("#search-btn").click()}),n.navigate("home")}),define("main",function(){});