console.log("js has loaded");


var myDiv = document.getElementById("myDiv"),
		DOM = document.querySelector("body"),
		checkpoint = document.getElementById("checkpoint");


var scrolling = function(){

	// scrollY defines how far we've scrolled
	// innerHeight defines the height of our viewport
	// offsetHeight defines the height of our body
	console.log(window.scrollY, window.innerHeight, DOM.offsetHeight)

	console.log(window.scrollY/ (DOM.offsetHeight - window.innerHeight))

	if(window.scrollY >= DOM.offsetHeight - window.innerHeight){
		console.log("BOTTOM!")
		window.scrollTo(0,0)
	}

	console.log(checkpoint.getBoundingClientRect().top)

	if(checkpoint.getBoundingClientRect().top + checkpoint.getBoundingClientRect().height < 0){
		console.log("whole element is past!")
	}else if(checkpoint.getBoundingClientRect().top < 0){
		console.log("top has past!")
	}


}

window.addEventListener("scroll", scrolling);


var rotation = function(element){
	element.style.color = "red"
}

