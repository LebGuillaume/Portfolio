var score = 15;
var highscore = 0;
var vie = 10;
var malus =0;

//Fonction de la piece principale
function jouez() {

	$("#jouez").fadeOut("slow", function () {
		// Animation complete
	}); // Animation complete
	var pile = true,
		face = false;
	$.confirm({
		title: 'Pariez ',
		titleClass: '',
		type: 'default',
		typeAnimated: true,
		draggable: true,
		dragWindowGap: 15,
		dragWindowBorder: true,
		animateFromElement: true,
		smoothContent: true,
		content: ' ',
		buttons: {
			PILE: {
				action: function parier() {
					parie(pile);
				}
			},
			FACE: {
				action: function parier() {
					parie(face);
				}
			},
		},
		contentLoaded: function (data, status, xhr) {},
		icon: '',
		lazyOpen: false,
		bgOpacity: null,
		theme: 'supervan',
		animation: 'scale',
		closeAnimation: 'scale',
		animationSpeed: 400,
		animationBounce: 3,
		rtl: false,
		container: 'body',
		containerFluid: false,
		backgroundDismiss: false,
		backgroundDismissAnimation: 'shake',
		autoClose: false,
		closeIcon: null,
		closeIconClass: false,
		watchInterval: 100,
		columnClass: 'col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1',
		boxWidth: '50%',
		scrollToPreviousElement: true,
		scrollToPreviousElementAnimate: true,
		useBootstrap: true,
		offsetTop: 160,
		offsetBottom: 40,
		bootstrapClasses: {
			container: 'container',
			containerFluid: 'container-fluid',
			row: 'row',
			boxWidth: '1000px',
			useBootstrap: false,
		},
		onContentReady: function () {},
		onOpenBefore: function () {},
		onOpen: function () {},
		onClose: function () {},
		onDestroy: function () {},
		onAction: function () {}
	});
}

function parie(coin) {
	var d = 0;
	d = Math.round(Math.random(1));
var d = 1;
	if (d == 1 && coin) {
		document.getElementById("face").innerHTML = "PILE";
		$("#face").css('visibility', 'visible').hide().fadeIn("slow", function () {
			$("#face").fadeOut("slow", function () {
				// Animation complete
			}); // Animation complete
		});
		$(".bravo").css('visibility', 'visible').hide().fadeIn("slow", function () {

			$(".bravo").fadeOut("slow", function () {
				// Animation complete
			}); // Animation complete
		});
		saut();
	}

	if (d == 0 && !coin) {

		document.getElementById("face").innerHTML = "FACE";
		$("#face").css('visibility', 'visible').hide().fadeIn("slow", function () {
			$("#face").fadeOut("slow", function () {
				// Animation complete
			}); // Animation complete
		});
		$(".bravo").css('visibility', 'visible').hide().fadeIn("slow", function () {
			$(".bravo").fadeOut("slow", function () {
				// Animation complete
			}); // Animation complete
		});
		saut();

	}
	if (d == 1 && !coin || d == 0 && coin) {
		$(".rate").css('visibility', 'visible').hide().fadeIn("slow", function () {
			$(".rate").fadeOut("slow", function () {
				// Animation complete
			}); // Animation complete
		});
		if (d == 1) {
			document.getElementById("face").innerHTML = "PILE";
			$("#face").css('visibility', 'visible').hide().fadeIn("slow", function () {
				$("#face").fadeOut("slow", function () {
					// Animation complete
				}); // Animation complete
			});
		}
		if (d == 0) {
			document.getElementById('face').innerHTML = "FACE";
			$("#face").css('visibility', 'visible').hide().fadeIn("slow", function () {
				$("#face").fadeOut("slow", function () {
					// Animation complete
				}); // Animation complete
			});
		}
		recule();


	}



}

function retourpiece() {
	$("#jouez").fadeIn("slow", function () {
		// Animation complete
	}); // Animation complete
}

var idle = false;
element = document.getElementById("jump");
//element.addEventListener("click", function () {
function saut() {
malus=0;
	score++;

	if (score > highscore) {
		highscore = score;



		function record() {


			$("#nvxrec").css('visibility', 'visible').hide().fadeIn("slow", function () {


				$("#nvxrec").fadeOut("slow", function () {
					// Animation complete
				}); // Animation complete
			});

		}
		setTimeout(record, 1400);


	}
	setTimeout(retourpiece, 1000);
	document.getElementById("plusplus").innerHTML = "+1";
	document.getElementById("plusplus").style.color = "green";
	$("#plusplus").css('visibility', 'visible').hide().fadeIn("slow", function () {


		$("#plusplus").fadeOut("slow", function () {
			// Animation complete
		}); // Animation complete
	});

	document.getElementById("scoring").innerHTML = "SCORE : " + score;
	document.getElementById("highscoring").innerHTML = "HIGH-SCORE : " + highscore;

	if (!idle) {
		element.style.backgroundImage = "url('images/sprite2scaled.png')";
		element.style.width = "166px";
		element.style.height = "218px";
		element.style.backgroundSize = " 603% 100%"
		element.style.animation = "jump 1.0s steps(6) ";

		sol();
		idle = true;

	}

	if (idle) {

		element.addEventListener("webkitAnimationEnd", myEndFunction);
	}

	function myEndFunction() {
		element.style.backgroundImage = "url('images/spriteidle2scaled.png')";

		element.style.backgroundSize = " 403% 100%"
		//element.style.width = "166px";
		//element.style.height = "218px";
		element.style.animation = "idle 1.0s steps(4) infinite ";
		idle = false;
	}

}

//////////////////////

function recule() {
	vie--;
	document.getElementById("vie").innerHTML = "Il vous reste " + vie + " chances ! ";


	if (vie > 0) {
		setTimeout(retourpiece, 1000);
	}
	if (vie == 0) {
		setTimeout(perdu, 2000);
	}
    malus++;
    score=score-1;
    if(malus==3){
        score=0;
    }
	if (score < 0) {
		score = 0;
	}
	document.getElementById("scoring").innerHTML = "SCORE : " + score;
	document.getElementById("plusplus").innerHTML = "-3";
	document.getElementById("plusplus").style.color = "red";
	$("#plusplus").css('visibility', 'visible').hide().fadeIn("slow", function () {
		$("#plusplus").fadeOut("slow", function () {
			// Animation complete
		}); // Animation complete
	});
	if (!idle && malus ==3) {
		element2.style.animation = "solrecule 1.0s steps(24)";


	}

	if (!idle) {

		element.addEventListener("webkitAnimationEnd", myEndFunction);
	}

	function myEndFunction() {

		element2.style.animation = "sol";

	}
}
//, false);


//////////////////////////////////


element2 = document.getElementById("sol");

var distance = 0;

function perdu() {
	document.getElementById("face").innerHTML = "GAME OVER";
	$("#face").css('visibility', 'visible').hide().fadeIn("slow", function () {

	});
	$("#fond").css('visibility', 'visible').hide().fadeIn("slow", function () {

	});
	document.getElementById("scoreboard-s").innerHTML = score;
	document.getElementById("scoreboard-h").innerHTML = highscore;
	$("#scoreboard").css('visibility', 'visible').hide().fadeIn("slow", function () {

	});
	return;
}

function sol() {


	if (!idle) {
		element2.style.animation = "solmove 1.0s steps(24)";


	}

	if (!idle) {

		element.addEventListener("webkitAnimationEnd", myEndFunction);
	}

	function myEndFunction() {

		element2.style.animation = "sol";

	}

}
