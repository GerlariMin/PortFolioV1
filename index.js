function route(){

	var hash=window.location.hash;

	switch(hash){

		case("#cedr"):
			$.get("projets.html", function(reponse){
				content = $(reponse).filter("#cedr").html();
				$("#container").html(content);
			}, "html");
			break;

		case("#competences"):
			$.get("info.html", function(reponse){
				content = $(reponse).filter("#competences").html();
				$("#container").html(content);
				count_competences();
			}, "html");
			break;

		/*case("#complements"):
			$.get("info.html", function(reponse){
				content = $(reponse).filter("#complements").html();
				$("#container").html(content);
			}, "html");
			break;*/

		case("#contact"):
			$.get("info.html", function(reponse){
				content = $(reponse).filter("#contact").html();
				$("#container").html(content);
			}, "html");
			break;

		case("#cv"):
			$.get("info.html", function(reponse){
				content = $(reponse).filter("#cv").html();
				$("#container").html(content);
			}, "html");
			break;

		case("#echecs"):
			$.get("projets.html", function(reponse){
				content = $(reponse).filter("#echecs").html();
				$("#container").html(content);
			}, "html");
			break;

		case("#experiences"):
			$.get("info.html", function(reponse){
				content = $(reponse).filter("#experiences").html();
				$("#container").html(content);
				count_experiences();
			}, "html");
			break;

		case("#historique"):
			$.get("info.html", function(reponse){
				content = $(reponse).filter("#historique").html();
				$("#container").html(content);
			}, "html");
			break;

		case("#loutrebay"):
			$.get("projets.html", function(reponse){
				content = $(reponse).filter("#loutrebay").html();
				$("#container").html(content);
			}, "html");
			break;

		case("#ludema"):
			$.get("projets.html", function(reponse){
				content = $(reponse).filter("#ludema").html();
				$("#container").html(content);
			}, "html");
			break;

		case("#mmo"):
			$.get("projets.html", function(reponse){
				content = $(reponse).filter("#mmo").html();
				$("#container").html(content);
			}, "html");
			break;
			
		case("#monkeyball"):
			$.get("projets.html", function(reponse){
				content = $(reponse).filter("#monkeyball").html();
				$("#container").html(content);
			}, "html");
			break;

		case("#parcours"):
			$.get("info.html", function(reponse){
				content = $(reponse).filter("#parcours").html();
				$("#container").html(content);
			}, "html");
			break;

		case("#portfolio"):
			$.get("projets.html", function(reponse){
				content = $(reponse).filter("#portfolio").html();
				$("#container").html(content);
			}, "html");
			break;

		case("#presentation"):
			$.get("info.html", function(reponse){
				content = $(reponse).filter("#presentation").html();
				$("#container").html(content);
			}, "html");
			break;

		case("#retrogames"):
			$.get("projets.html", function(reponse){
				content = $(reponse).filter("#retrogames").html();
				$("#container").html(content);
			}, "html");
			break;

		default:
			$.get("info.html", function(reponse){
				content = $(reponse).filter("#home").html();
				$("#container").html(content);
			}, "html");
			break;

	}
}

function count_competences(){
	$('#badgeOne').html($('#collapseOne').children().eq(0).children().length);
	$('#badgeTwo').html($('#collapseTwo').children().eq(0).children().length);
	$('#badgeThree').html($('#collapseThree').children().eq(0).children().length);
}

function count_experiences(){
	$('#badgeOne').html($('#collapseOne').children().eq(0).children().length);
	$('#badgeTwo').html($('#collapseTwo').children().eq(0).children().length);
	$('#badgeThree').html($('#collapseThree').children().eq(0).children().length);
	$('#badgeFour').html($('#collapseFour').children().eq(0).children().length);
	$('#badgeFive').html($('#collapseFive').children().eq(0).children().length);
}

function breadcrumb(){
	
	var hash=window.location.hash;

	if(hash!=="#home" && hash!==""){
		if(hash=="#cedr" || hash=="#retrogames" || hash=="#ludema" || hash=="#loutrebay" || hash=="#portfolio" || hash=="#monkeyball" || hash=="#mmo" || hash=="#echecs"){
			$('#breadcrumb').html("<li class='breadcrumb-item'><a href='#home'>Home</a></li> <li class='breadcrumb-item'><a href='#experiences'>Expériences</a></li> <li class='breadcrumb-item active' aria-current='page'>"+hash.split('#')[1].substr(0,1).toUpperCase()+hash.split('#')[1].substr(1,hash.split('#')[1].length).toLowerCase()+"</li>");
		} else if(hash=="#experiences"){
			$('#breadcrumb').html("<li class='breadcrumb-item'><a href='#home'>Home</a></li> <li class='breadcrumb-item active' aria-current='page'>Expériences</li>");
		} else if(hash=="#competences"){
			$('#breadcrumb').html("<li class='breadcrumb-item'><a href='#home'>Home</a></li> <li class='breadcrumb-item active' aria-current='page'>Compétences</li>");
		} else if(hash=="#cv"){
			$('#breadcrumb').html("<li class='breadcrumb-item'><a href='#home'>Home</a></li> <li class='breadcrumb-item active' aria-current='page'>CV</li>");
		} else{
			$('#breadcrumb').html("<li class='breadcrumb-item'><a href='#home'>Home</a></li> <li class='breadcrumb-item active' aria-current='page'>"+hash.split('#')[1].substr(0,1).toUpperCase()+hash.split('#')[1].substr(1,hash.split('#')[1].length).toLowerCase()+"</li>");
		}
	} else{
		$('#breadcrumb').html("<li class='breadcrumb-item active' aria-current='page'>Home</li>");
	}
}

$(document).ready(function(){
	var container = document.getElementById("container");
    var navbar = document.getElementById("navbar");
    var footer = document.getElementById("footer");
    container.width = window.innerWidth-4;
    container.height = window.innerHeight-container.offsetTop-footer.offsetHeight-navbar.offsetHeight;
	route();
	breadcrumb();
	$(window).on("hashchange", function(){
		route();
		breadcrumb();
	});

	/*$(window).on("scroll", function(){
		var scrollPercent = Math.round((window.scrollY/(container.height)) * 100);
		
		$('#progressbar').css("width",scrollPercent+"%");
		if(scrollPercent>=0 && scrollPercent<=100){
			$('#progressbar').html(scrollPercent+"%");
		}
	});*/

});
