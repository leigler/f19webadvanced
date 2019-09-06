window.onload = function(){

	var contents = [
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
