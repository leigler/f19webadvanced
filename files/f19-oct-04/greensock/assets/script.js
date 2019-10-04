
var runAnimation = function(){
	console.log("running Greensock animation")
	// green sock "Tweens" animations: 


	// each tween has a target (selector), a time, and styles to changes:
	TweenMax.to(".square", 0.5, {rotation: 360})

	TweenMax.from("#title", 2, {fontSize: "4rem", opacity: 0})

	TweenMax.fromTo("#title", 10, 
		{ color: "black", 
			borderBottomWidth: "1px"
		}, 
		{ color: "blue", 
			borderBottomWidth: "1rem"
		})


	// All at once:
	TweenMax.to(".square", 0.5, 
	{
		backgroundColor: "blue", 
		top: "+=10rem", 
		borderRadius: "0.5rem", 
		width: "1rem"
	})

	// delayed action
	TweenMax.staggerTo(".square", 0.5, 
		{
			stagger: 0.3, 
			backgroundColor: "red", 
			left: "90%", 
			width: "4rem",
			yoyo: true, 
			repeat: -1, 
			delay: 1,
			ease: Power2.easeIn
		}
	)

}




/*  
 * This eventlistener checks to make sure 
 * the html page has loaded before running any functions:
 *
 */
document.addEventListener('DOMContentLoaded', function(event) {
	runAnimation();

})