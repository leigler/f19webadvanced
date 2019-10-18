// Documentation: https://www.metaweather.com/api/
// New York woeid: 2459115


var fetchingCityWOEID = function(cityString){
	// WOEID is the WHERE ON EARTH IDENTIFIER
	// https://en.wikipedia.org/wiki/WOEID

	var weather = `https://www.metaweather.com/api/location/search/?query=${cityString}`,
			query = `https://cors-anywhere.herokuapp.com/${weather}`;

	fetch(query)
	.then(function(results){
		console.log("Request for " + cityString, results); // log unprocessed results
		
		return results.json();
	})
	.then(function(jsonResults){
		console.log(jsonResults) // log converted json results

		var woeid = jsonResults[0].woeid; // get the woeid
		var city = jsonResults[0].title;
		console.log("WOEID:", woeid)

		// use woeid to get the weather information associated with your city
		// fetchingWeatherCORS(woeid);

	})
}


var fetchingWeatherCORS = function(woeid){
	// example uses "cors-anywhere" hack, which allows us to circumvent cors permissions

	var weather = `https://www.metaweather.com/api/location/${woeid}`,
			query = `https://cors-anywhere.herokuapp.com/${weather}`;

	fetch(query)
	.then(function(results){
		console.log("Request for " + woeid, results); // log unprocessed results
		
		return results.json();
	})
	.then(function(jsonResults){
		console.log(jsonResults) // log converted json results

		var speed = jsonResults.consolidated_weather[0].wind_speed;

		TweenMax.to("#city_element", speed, 
			{
				delay: 1,
				rotation: jsonResults.consolidated_weather[0].wind_direction,
				ease: Power4.easein
			})

		var tl = new TimelineMax({repeat: -1});

		var $box = "#city_element";

		tl.to($box, 1, {x:50,y:0})
			 .to($box, 1, {x:50,y:50})
			 .to($box, 1, {x:-50,y:50})
			 .to($box, 1, {x:-50,y:0})
			 .to($box, 1, {x:0,y:0});

		// fromTo
		// from

		// transform x
		// rotation
		
		// easing

		// repeat
		// yoyo
		// stagger

		// Timeline


	})

}



document.addEventListener('DOMContentLoaded', function(event) {
	// once the document has loaded: 
	// fetchingCityWOEID("New York");
	fetchingWeatherCORS(2459115);
})