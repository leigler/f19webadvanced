window.onload = function(){

	var contents = [
		{
			day: "Exercise for Friday, Nov 15",
			list: [],
			assignmentTitle: "localStorage dichotomy",
			assignment :[
				`This exercise&rsquo;s goal is to increase your comfort with saving and retrieving data from your browser&rsquo;s <code>localStorage</code>.`,
				`For this exercise, please create two interactions (i.e. create two eventListeners) with visual outputs that are somehow juxtaposed.`,
				`To utilize the <code>localStorage</code>, each interaction should update your localStorage item (<code>localStorage.setItem('favCeleb', 'Grumpy Cat');</code>), and each page refresh should check and update your site with your localStorage item&rsquo;s data (<code>localStorage.getItem('favCeleb');</code>).`,
				`Don&rsquo;t forget to convert your data into the correct type (integer, json, boolean) if necessary!`,
				`For a refresher, you can read through the Mozilla docs <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">here</a> or find the past lecture and demo files <a href="../lectures/index.html">here</a>.`,
				`<br><br>Examples include: <ul>
					<li>Two buttons that respectively increase and decrease a circle&rsquo;s size.</li>
					<li>An array of words or phrases that are selected and re-ordered on a canvas.</li>
					<li>A simple drawing + erasing tool.</li>
					<li>A cross-session stopwatch.</li>
				</ul>`
			]
		},
		{
			day: "Exercise for Friday, Oct 18",
			list : [],
			assignmentTitle: "JS: Fetch and Libraries",
			assignment: [
				`<a href="files/inclass-demo-boilerplate.zip">Demo In-class files</a>`,
				`Choose a city that you know intimately (maybe you&rsquo;ve visited it repeatedly, or you lived there for a time) and consider what you find visually unique about it. Using the <a href="../files/f19-oct-18.zip">demo boilerplate</a> we just examined, create a simple animation using the <a target="_blank" href="https://greensock.com/get-started/">TweenMax library</a> consisting of two DOM elements that responds to the weather conditions of this city.`,
				`Helpful Commands:<br>
				navigate to correct directory in terminal using <a target="_blank" href="https://github.com/0nn0/terminal-mac-cheatsheet#core-commands">these commands</a>.<br>To launch a local server in terminal: <code>php -S 127.0.0.1:8000</code>.`
			]
		},
		{
			day: "Exercise for Friday, October 4",
			list: [],
			assignmentTitle: "JS Libraries",
			assignment: [
				`Experiment with one of the libraries listed (including the libraries we used in class), and make a small sketch to share with the class.`,
				`Select a library that you find interesting or that might serve an endgoal and explore its documentation—if it has demos, try and recreate them (and then expand on them).`
			]
		},
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


	contents.forEach(function(content, index){

		if(index === 0){
			document.querySelector("#root").innerHTML += `<span onclick="Site.openDrawer(event)" class="past_event">${Site.basicContent(content)}</span>`
		}else{
			document.querySelector("#root").innerHTML += `<span onclick="Site.openDrawer(event)" class="past_event hidden">${Site.basicContent(content)}</span>`

		}
		
	})

}
