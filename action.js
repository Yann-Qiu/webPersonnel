jQuery(document).ready(function() {

	var setActive = function(id){
		$(".nav-item").removeClass('active');
		$(id).addClass('active');
	}

	window.onload = function(){
		var Top = $(document.documentElement).scrollTop() || $(document.body).scrollTop();
		console.log(Top);

		if(Top >= 0 && Top <=700){
				setActive("#home");
				$('#homeContent').fadeIn('3000');
				if(Top >= 200){
					$('#aboutContent').fadeIn('3000');
				}
			}
		if(Top >= 700 && Top <=1100){
			setActive("#about");
			if(Top >= 700){
				$('#homeContent').fadeIn('3000');
				$('#aboutContent').fadeIn('3000');
				$('#skillContent').fadeIn('3000');
			}
		}
		if(Top >= 1100 && Top <=1750){
			setActive("#skill");
			if(Top >= 1100){
				$('#homeContent').fadeIn('3000');
				$('#aboutContent').fadeIn('3000');
				$('#skillContent').fadeIn('3000');
				$('#socialContent').fadeIn('3000');
			}
		}
		if(Top >= 1750 && Top <=2000){
			setActive("#socail");
			if(Top >= 1425){
				$('#homeContent').fadeIn('3000');
				$('#aboutContent').fadeIn('3000');
				$('#skillContent').fadeIn('3000');
				$('#socialContent').fadeIn('3000');
				$('#educaContent').fadeIn('3000');
			}
		}
		if(Top >= 2000 && Top <=2500){
			setActive("#educa");
			if(Top >= 1800){
				$('#homeContent').fadeIn('3000');
				$('#aboutContent').fadeIn('3000');
				$('#skillContent').fadeIn('3000');
				$('#socialContent').fadeIn('3000');
				$('#educaContent').fadeIn('3000');
				$('#projectContent').fadeIn('3000');
			}
		}
		if(Top >= 2500 && Top <=2800){
			setActive("#work");
			$('#homeContent').fadeIn('3000');
			$('#aboutContent').fadeIn('3000');
			$('#skillContent').fadeIn('3000');
			$('#socialContent').fadeIn('3000');
			$('#educaContent').fadeIn('3000');
			$('#workContent').fadeIn('3000');
		}
		if(Top >= 2800 ){
			setActive("#project");
			$('#homeContent').fadeIn('3000');
			$('#aboutContent').fadeIn('3000');
			$('#skillContent').fadeIn('3000');
			$('#socialContent').fadeIn('3000');
			$('#educaContent').fadeIn('3000');
			$('#workContent').fadeIn('3000');
			$('#projectContent').fadeIn('3000');
		}
	}
	
	let timer = null;
	window.onscroll = function(){
		clearTimeout(timer);
		timer = setTimeout(function(){
			var Top = $(document.documentElement).scrollTop() || $(document.body).scrollTop();

			if(Top >= 0 && Top <=700){
				setActive("#home");
				$('#homeContent').fadeIn('3000');
				if(Top >= 200){
					$('#aboutContent').fadeIn('3000');
				}
			}
			if(Top >= 700 && Top <=1100){
				setActive("#about");
				if(Top >= 850)
					$('#skillContent').fadeIn('3000');
			}
			if(Top >= 1100 && Top <=1750){
				setActive("#skill");
				if(Top >= 1225)
					$('#socialContent').fadeIn('3000');
			}
			if(Top >= 1750 && Top <=2000){
				setActive("#socail");
				if(Top >= 1425)
					$('#educaContent').fadeIn('3000');
			}
			if(Top >= 2000 && Top <=2600){
				setActive("#educa");
				if(Top >= 2050)
					$('#workContent').fadeIn('3000');
			}
			if(Top >= 2600 && Top <=3000){
				setActive("#work");
				if(Top >= 2700)
					$('#projectContent').fadeIn('3000');
			}
			if( Top >= 3000){
				setActive("#project");
			}
		},100)
	}

	$(".nav-item").hover(function() {
		$(this).find(".iconfont").css("margin-left",'10px');
	},function(){
		$(this).find(".iconfont").css("margin-left","0px")
	});

	$(".nav-item").click(function(event) {
		/* Act on the event */
		$(".nav-item").removeClass('active');
		$(this).addClass('active');
		switch ($(this).attr("id")) {
			case "home":
				// statements_1
				$("html, body").animate({scrollTop:($("#homeContent").offset().top -50 )},500);
				break;
			case "about":
				// statements_1
				$("html, body").animate({scrollTop:($("#aboutContent").offset().top -50 )},500);
				break;
			case "skill":
				// statements_1
				$("html, body").animate({scrollTop:($("#skillContent").offset().top -50 )},500);
				break;
			case "socail":
				// statements_1
				$("html, body").animate({scrollTop:($("#socialContent").offset().top -50 )},500);
				break;
			case "educa":
				// statements_1
				$("html, body").animate({scrollTop:($("#educaContent").offset().top -50 )},500);
				break;
			case "work":
				// statements_1
				$("html, body").animate({scrollTop:($("#workContent").offset().top -50 )},500);
				break;
			case "project":
				// statements_1
				$("html, body").animate({scrollTop:($("#projectContent").offset().top -50 )},500);
				break;
			default:
				// statements_def
				break;
		}
	});

	$("a[href^='#']").click(function(event) {
		/* Act on the event */
		$('html,body').animate({scrollTop: ($($(this).attr('href')).offset().top -50 )},1000);

	});

	$("#btnMore").hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).css({
			"background-color":"#4A63E7",
			"color":"#fff",
			"box-shadow" : "2px 2px 2px rgba(0,0,0,0.9)",
			"transform" : 'translate(0, -10px)',
			"transition" : "all .5s",
		})
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).css({
			"background-color": "#FF5959",
			"color":"#fff",
			"box-shadow" : "none",
			"transform" : 'translate(0, 0px)',
			"transition" : "all .5s",
			"box-shadow" : "none"
		})
	});

	$("#btnMail").hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).css({
			"background-color":"#fff",
			"color":"black",
			"box-shadow" : "2px 2px 2px rgba(0,0,0,0.9)",
			"transform" : 'translate(0, -10px)',
			"transition" : "all .5s",
		})
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).css({
			"background-color": "rgba(1,1,1,0)",
			"color":"#fff",
			"transform" : 'translate(0, 0px)',
			"transition" : "all .5s",
			"box-shadow" : "none"
		})
	});

	$("#CVFR").hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).css({
			"background-color":"#4A63E7",
			"color":"#fff",
			"box-shadow" : "2px 2px 2px rgba(0,0,0,0.9)",
			"transform" : 'translate(0, -10px)',
			"transition" : "all .5s",
			"box-shadow" : "5px 10px 5px #ccc"
		})
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).css({
			"background-color": "#FF5959",
			"color":"#fff",
			"box-shadow" : "none",
			"transform" : 'translate(0, 0px)',
			"transition" : "all .5s",
			"box-shadow" : "none"
		})
	});

	$("#CVFR").on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		window.open("./CV_Qiu.pdf");
	});

	$("#CVCH").hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).css({
			"background-color":"#4A63E7",
			"color":"#fff",
			"box-shadow" : "2px 2px 2px rgba(0,0,0,0.9)",
			"transform" : 'translate(0, -10px)',
			"transition" : "all .5s",
			"box-shadow" : "5px 10px 5px #ccc"
		})
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).css({
			"background-color": "#FF5959",
			"color":"#ccc",
			"background-color": "transparent",
			"transform" : 'translate(0, 0px)',
			"transition" : "all .5s",
			"box-shadow" : "none"
		})
	});

	$("#CVCH").on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		window.open("./CV(chinoise).pdf");
	});


	$(".website").hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).css({
			"background-color":"#FF5959",
			"border-radius":"20px",
		})
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).css({
			"background-color": "#4A63E7",
		})
	});



	$(".card").hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).css({
			"background-color":"#FF5959"
		}).children().each(function(){
			$(this).css({
				"color":"#fff"
			}).find(".text, .iconfont").css({
				"color":"#fff"
			})
		})
	}, function() {
		$(this).css({
			"background-color":""
		}).children().each(function(){
			$(this).css({
				"color":"black"
			}).find(".text").css({
				"color":"#888"
			}).prevAll(".iconfont").css({
				"color":"#FF5959"
			})
		})
	});
});