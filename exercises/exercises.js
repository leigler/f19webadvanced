window.onload = function(){

	var contents = [
		{
			day: "Exercise for Friday, September 27",
			list: [],
			assignmentTitle : "Additive Interface",
			assignment: [
				`Create a simple interface consisting of a single button.`,
				`The button itself should have a <code>click</code> EventListener that appends new elements to the site. <i>The site as a whole</i> should have at least two additional EventListeners (<code>mousemove</code>, <code>mouseover</code>, <code>scroll</code>, etc) for a total of three interactive features.`
			]
		},
		{
			day: "Exercise for Friday, September 06",
			list: [],
			assignmentTitle : "For Loop",
			assignment: [
				`Create two or more arrays of equal length.`,
				`Using a <i>for loop</i> (either <code>forEach</code> or <code>for(i=0, i < YOURARRAY.length, i++)</code>, iterate through your arrays, combining each corresponding array value in an interesting way using template literals. Think about the variables you have at your disposal (array values, your for loop counter) and how you can use these to create surprising combinations (either generating content or manipulating css).`,
				`Output your results by appending them to the DOM.`
			]
		},
	];


	contents.forEach(function(content){
		document.querySelector("#root").innerHTML += `${Site.basicContent(content)}`
	})

}
