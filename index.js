window.onload = function(){

	var contents = [
		{
			day: "Friday, November 8",
			list: [
				`Assignment 3, Final Critique 💻 🌐 📚`,
				`Assignment 4: Reading Discussion and Object Sharing`,
				`localStorage review`
			],
			assignmentTitle: '<a href="assignments/assignment4.html" >Assignment 4, Week 2</a>',
			assignment: [
				`For next week, prepare two design directions for your 
				website that translate the affordances of your object into 
				a digital interface. Consider the assignment-related readings, today&rsquo;s discussion,
				and the feedback you received regarding your object. Within each design, make sure to consider which parts will utilize <code>localStorage</code> to customize a user&rsquo;s experience.`,
				`Each direction should be composed of:<br>
				<ul>
					<li>A static mock-up (Adobe Illustrator or XD, Sketch, Figma, etc) outlining the affordances you&rsquo;re interested in, the overall layout, and user-flow.</li>
				<li>A collection of small javascript sketches exploring how your object&rsquo;s affordances can translate into digital interactions.</li>
				</ul>
				<i>The following week will be spent developing one of the design directions and beginning to integrate localStorage functionality</i>.`
			]
		},
		{
			day: "Friday, November 1",
			list: [
				`Assignment 3, Review`,
				`Assignment 4, Introduction`,
				`<a href="lectures/index.html">Javascript and localStorage</a>, <a href="files/f19-nov-1-demo.zip">Demo files</a>`
			],
			assignmentTitle: '<a href="assignments/assignment4.html" >Assignment 4, Week 1</a>',
			assignment: [
				`Readings:<br>
						<a target="_blank" href="http://www.bruno-latour.fr/sites/default/files/P-36-Berliner-KEY-GBpdf.pdf">The Berliner Key</a> by Bruno Latour<br>
						<a target="_blank" href="https://jnd.org/affordances_and_design/">Affordances and Design</a> by Don Norman<br>
						<a target="_blank" href="https://arena-attachments.s3.amazonaws.com/3476765/1b3df7e9a666ff9bd1eb2e24a1adaf2e.pdf?1548259343">Framing Thoughtless Acts</a> by Jane Fulton Suri<br>
						`,
				`For next week, please read all three of the readings and prepare a question for each. Additionally find an object that shapes how its users behave (in Latour’s words: find an object that is an actor, or in Suri’s and Norman’s words: an object that has affordances and produces thoughtless acts).`,
				`Your object will act as the inspiration for this project, so feel free to photograph (or otherwise document) it, variations of it, and take time to learn about its history.`,
				`Next week will be spent discussing these objects in the context of the readings, as well as exploring the localStorage API through an exercise.`
			]
		},
		{
			day: "Friday, October 25",
			list: [
			`Individual Meetings + Mid-semester Check-in: <a target="_blank" href="https://docs.google.com/spreadsheets/d/1jTKlrkyuhjrX8OFAwRrEe7wHXFO9XP3pH8PuNWuPx14/edit?usp=sharing" >Sign up sheet</a>`
			],
			assignmentTitle: '<a href="assignments/assignment3.html">Assignment 3, Week 4</a>',
			assignment: [
				`For next week, finalize your site and be prepared to share.`
			]
		},
		{
			day: "Friday, October 17",
			list: [
				`<a href="exercises/index.html">Demo: Javascript asynchronous calls, traversing Javascript Libraries</a>`,
				`<a href="files/inclass-demo-boilerplate.zip">Demo In-class files</a>`,
				`Assignment 3: Check-in and Questions`
			],
			assignmentTitle: `<a href="assignments/assignment3.html">Assignment 3, Week 3</a>`,
			assignment: [
				`In addition to incorporating the feedback you received today in class, for next week, please begin integrating your API into your front end. Consider which elements can start without your content and which need to wait for your request to finish.`
			]
		},
		{
			day: "Friday, October 11",
			list: [
				`Assignment 2: Pattern, Final Presentations`,
				`Assignment 3: Context, Group Reviews`,
				`Demo: Introduction to JavaScript Libraries`,
				`Demo Files: <a target="_blank" href="files/f19-oct-11/f19-oct-11-lib.zip">f19-oct-11-lib.zip</a>`,
				`Introduction: Javascript and asynchronous calls, APIs`,
				`Demo Files: <a target="_blank" href="files/f19-oct-11/f19-oct-11-fetch.zip">f19-oct-11-fetch.zip</a>`,
			],
			assignmentTitle: `<a href="assignments/assignment3.html">Assignment 3, Week 2</a>`,
			assignment: [
			`Based on your conversations in class today, please select a design direction and begin building it out.`,
			`Your assignment for next week consists of two parts: <br>1. Build out your chosen design with the javascript library of your choosing. You should use this opportunity to experiment with the library. Since you&rsquo;re working with an unfamiliar library, expect your building process to be fluid. For next week, your &ldquo;front-end&rdquo; should be well underway and ready for integration with your API.`,
			`2. Write a small sketch using this <a href="files/f19-oct-11/boilerplate-fetch.zip">boilerplate</a> to successfully fetch data from your chosen API. This does not yet need to be integrated, but should <code>console.log()</code> the data you will use in this project. Remember to use a local server <code>php -S 127.0.0.1:8000/</code> (or glitch) to properly fetch your data.`,
			`Readings:<br>
				<a target="_blank" href="https://arena-attachments.s3.amazonaws.com/5225470/3b167a5b05fceecb01b620934e49e8a2.pdf?">The Policeman&rsquo;s Beard is Half Constructed</a><br>
				<a target="_blank" href="http://www.cond.org/deception.pdf">Benevolent Deception in Human Computer Interaction</a>`
			]
		},
		{
			day: "Friday, October 4",
			list: [
				`Work Session + Check-in: Assignment 2`,
				`Demo: Introduction to JavaScript Libraries`,
				`Exercise: <a href="exercises/index.html">JS Libraries</a>`
			],
			assignmentTitle: "<a href='assignments/index.html'>Assignment 2, Pattern Week 5</a>",
			assignment: [
				`For next week, finalize your pattern and it&rsquo;s interface. You should prepare to demo your pattern to the class.`,
				`In planning your demo, consider:
				<ul>
					<li>How you might successfully show the different aspects of your pattern&rsquo;s interface.</li>
					<li>How you might communicate what you were interested in originally and how the pattern has evolved.</li>
				</ul>`,
				`Be prepared to navigate to your pattern from your github Index page. You will demo your pattern on it&rsquo;s own—<i>there is no need to make a presentation document.</i>`,
				`<span style="font-weight:bold;">For October 12</span>`,
				`In addition to finalizing your Pattern, please take a moment to review the <a href="assignments/assignment3.html">Assignement 3 Brief</a> and complete Week 1.`
			]
		},
		{
			day: "Friday, September 27",
			list: [
			`Assignment 2, Walk around`,
			`Lecture: <a href="lectures/index.html">Javascript DOM Manipulation, querySelectors, eventListeners, and Libraries</a>`,
			`Lecture Files: <a target="_blank" href="files/f19-sept-27.zip">f19-sept-27.zip</a>`,
			`Exercise: <a href="exercises/index.html">Additive Interface</a>`],
			assignmentTitle: "<a href='assignments/index.html'>Assignment 2, Pattern Week 4</a>",
			assignment: [
				`For next week you will evolve your pattern to its final form by introducing at least two interactive elements.`,
				`These interactive elements should utilize the eventListeners or inline functions reviewed in class and should allow your pattern to transcend into an experimental interface:`,
				`Questions to consider include:
				<ul>
				<li>Does the pattern itself exist as an interface, or is the interface layered on top of it?</li>
				<li>Can we see the entire interface, or is it somehow embedded in our interaction with the site (i.e. does the interface consist of buttons or does our scroll produce a direct response)?</li>
				<li>How might the interface question our expectations?</li>
				<li>What about the pattern is revealed to the user through their interaction?</li>
				</ul>`
			]
		},
		{
			day: "Friday, September 20",
			list: [
				`Today&rsquo;s lecture will be held of campus due to the due to the <a target="_blank" href="https://strikewithus.org/nyc/">New York City Climate Strike</a>.`,
				`Optional Meetings times can be scheduled via this <a target="_blank" href="https://docs.google.com/spreadsheets/d/15IOcFj6DlNIYCaPBYq3K53nJk_2Miybisesj1c5KkCw/edit?usp=sharing">sheet</a>.`,
				`Lecture: <a href="lectures/index.html">Javascript functions, setTimeout, setInterval</a>, full <a target="_blank" href="files/f19-sept-20.zip">lecture files</a>.`,
			],
			assignmentTitle: "<a href='assignments/index.html'>Assignment 2, Pattern Week 3</a>",
			assignment : [
				`For next week, please evolve your pattern to animate using either <code>setTimeout</code> or <code>setInterval</code>. Consider how the introduction of movement influences your pattern&rsquo;s reveal.`,
				`Will you introduce easing via the css <code>transition</code> or <code>@keyframe</code> attributes? Will the site animate as it fills or will individual units animate on their own?`,
				`How will your animation influence how we understand the window&rsquo;s spatial dimensions?`
			]
		},
		{
			day: "Friday, September 13",
			list: [
				`<a target="_blank" href="https://docs.google.com/spreadsheets/d/17x37V9wdFWnQLyZS9iHwZPquyVj36RixKa6eixHFVOU/edit?usp=sharing">Assignment 1 (Index) Spreadsheet</a>`,
				`Assignment 2, Pattern Readings`,
				`Assignment 2, Pattern Review`,
				`Lecture: <a href="lectures/index.html">Javascript loops, DOM, and template literals</a>, <a target="_blank" href="files/f19-sept-13.zip">lecture files</a>`,
				`Nesting patterns, work session`
			],
			assignmentTitle: "<a href='assignments/index.html'>Assignment 2, Pattern Week 2</a>",
			assignment : [
				`For next week, please evolve your pattern into a more complex nested set of elements. You should also convert your strings into template literals.`
			]
		},
		{
			day: "Friday, September 06",
			list: [
				`Github Setup`,
				`HTML Review`,
				`Lecture: <a href="lectures/index.html">Javascript Basics</a>, <a target="_blank" href="../files/javascript-lecture-1.zip">lecture files</a>`,
				`Exercise: <a href="exercises/index.html">Javascript Loops</a>`,
				`Assignment 1: Reading and Project Review`
			],
			assignmentTitle : "<a href='assignments/index.html'>Assignment 2, Pattern (Week 1)</a>",

			assignment: [
				`Duration: 4 weeks`,
				`Readings:<br /><a target="_blank" href="https://s3.amazonaws.com/2b.andydayton.com/readings/molnar-aesthetic.pdf">
					Toward Aesthetic Guidelines for Paintings with the aid of a Computer</a> by <a target="_blank" href="https://www.are.na/daniel-lefcourt/monograph-vera-molnar">Vera Molnar</a>
					<br />
					<a target="_blank" href="https://arena-attachments.s3.amazonaws.com/2598476/32ee9b74216346c153e4600a745e0586.pdf?1535145818">Against Ordinary Language: The Language of the Body</a> by Kathy Acker
					<br />
					Please come with at least one question prepared in response to each reading.
					`,
				`You will write a JavaScript program which uses loops and if statements to create a modular generative pattern. You will design at least one single pattern unit (a module) (think: div) that changes over the course of its output.`,
				`Your unit should iterate at least 100 times. With each iteration, your unit should somehow modify itself (content or css attributes: size, color, rotation, shape, texture). Your pattern should have at least 2 variables of change (ex: content, color), is allowed to repeat itself (i.e. be a pattern), and is allowed to be as abstract or literal as you want (it can tell a story, or it can be an exercise in form). The goal of this project is to use javascript to dynamically append HTML elements and programmatically alter their attributes. This project will also utilize javascript to explore techniques of animation and interactivity.`
			]
		},
		{ 
			day: "Friday, August 30",
			list: [
				"Introductions, <a target='_blank' href='https://arena-attachments.s3.amazonaws.com/4925664/a211189c7746cf80e8af048666ca405d.pdf' >Syllabus Review</a>, Expectations", 
				"Discussion: HTML/CSS Review (<a target='_blank' href='files/boilerplate.zip'>boilerplate.zip</a>)",
				"Github installation, <a target='_blank' href='https://git-scm.com/book/en/v2/Getting-Started-Installing-Git'>Git</a>, <a target='_blank' href='https://help.github.com/en/desktop/getting-started-with-github-desktop'>Github Desktop</a>, and <a target='_blank' href='https://pages.github.com/'>Github Pages</a>"
			],
			assignmentTitle : "Assignment 1, Index",

			assignment: [
				"Duration: 1 Week",
				"Reading: <a target='_blank' href='https://thecreativeindependent.com/people/laurel-schwulst-my-website-is-a-shifting-house-next-to-a-river-of-knowledge-what-could-yours-be/'>My Website is a shifting house next to a river of knowledge. What could yours be?</a> by Laurel Schwulst",
				"Take the Github page that you set up in today’s class and convert it into a growing index of the work you will do for this class. As you design your index, consider what information is attached to each item (this might include the project title, date, brief, description, or screenshots), and what kind of information you want to include on the periphery (how is the site introduced? How do we know to whom the site belongs to?).",
				"Think about how this index will grow and change in reaction to the projects you will add. Your index should be built responsively (work on desktop and mobile). The goal of this 1-week assignment is to build a dynamic system using only HTML/CSS."
				]		
		}
	];

	var resources = [
		{
			title: "Javascript Libraries",
			list: [
				{
					title: "Greensock animation library",
					link: "https://greensock.com/"
				},
				{
					title: "Anime.js animation library",
					link: "https://animejs.com/"
				},
				{
					title: "Tone.js—browser-based music",
					link: "https://tonejs.github.io/"
				},
				{
					title: "jQuery",
					link: "https://jquery.com/"
				},
				{
					title: "Paper js—the vector library of the web",
					link: "http://paperjs.org/"
				},
				{
					title: "Fabric JS, html5 canvas library",
					link: "http://fabricjs.com/"
				},
				{
					title: "Easel js for html5 canvas",
					link: "http://www.createjs.com/easeljs"
				},
				{
					title: "SVG Drawing Animations",
					link: "https://tympanus.net/codrops/2013/12/30/svg-drawing-animation/"
				},
				{
					title: "D3, data driven document manipulation",
					link: "https://d3js.org/"
				},
				{
					title: "Bootstrap JS aids",
					link: "https://getbootstrap.com/docs/3.3/javascript/"
				},
				{
					title: "P5.js",
					link: "https://p5js.org/"
				},
				{
					title: "Three.js—a rendering library built off of webgl",
					link: "https://threejs.org/"
				},
				{
					title: "Sticky-kit scrolling aid",
					link: "http://leafo.net/sticky-kit/"
				},
				{
					title: "Scrollmagic animations",
					link: "http://scrollmagic.io/"
				},
				{
					title: "AOS scroll animation library",
					link: "https://michalsnik.github.io/aos/"
				},
				{
					title: "Flickity slideshow",
					link: "https://flickity.metafizzy.co/"
				},
				{
					title: "Masonry responsive grid",
					link: "https://masonry.desandro.com/"
				},
				{
					title: "Showdown, a JS markdown parser",
					link: "https://github.com/showdownjs/showdown"
				},
				{
					title: "Voca JS string manipulation",
					link: "https://vocajs.com/"
				},
				{
					title: "Two.js—a js driven drawing library",
					link: "https://two.js.org/"
				},
				{
					title: "Vivus.js an svg drawing library",
					link: "https://maxwellito.github.io/vivus/"
				},
				{
					title: "Parallax.js a simple parallax library",
					link: "http://matthew.wagerfield.com/parallax/"
				},
				{
					title: "Parallax.js another simple parallax library",
					link: "http://pixelcog.github.io/parallax.js/"
				},
			]
		},
		{
			title: "Web Development Resources",
			list: [
				{
					title: "Terminal Core Commands",
					link: "https://github.com/0nn0/terminal-mac-cheatsheet#core-commands"
				},
				{
					title: "W3Schools",
					link: "https://www.w3schools.com"
				},
				{
					title: "Stack Overflow",
					link: "https://stackoverflow.com"
				},
				{
					title: "Learn CSS Layout",
					link: "http://learnlayout.com/"
				},
				{
					title: "Learn to Code HTML & CSS",
					link: "https://learn.shayhowe.com"
				},
				{
					title: "Code Academy: Learn HTML",
					link: "https://www.codecademy.com/learn/learn-html"
				},
				{
					title: "Code Academy: Learn CSS",
					link: "https://www.codecademy.com/learn/learn-css"
				},
				{
					title: "Code Academy: Learn Javascript",
					link: "https://www.codecademy.com/learn/learn-javascript"
				},
				{
					title: "Code Academy: Learn jQuery",
					link: "https://www.codecademy.com/learn/learn-jquery"
				},
				{
					title: "Dev Docs",
					link: "https://devdocs.io"
				},
				{
					title: "Shapes of CSS",
					link: "https://css-tricks.com/the-shapes-of-css/"
				},
				{
					title: "Centering in CSS Guide",
					link: "https://css-tricks.com/centering-css-complete-guide/"
				},
				{
					title: "Guide to Flexbox",
					link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
				}
			]
		},
		{
			title: "Students",
			list: [
				{
					title: "Jayin Xu", 
					link: "https://jayinx.github.io/Assignment1/"
				},
				{
					title: "Aira Dolfo", 
					link: "https://dolfa226.github.io/web_advanced_index/"
				},
				{
					title: "Scarlet Li", 
					link: "https://lis874.github.io/web_advanced_index/"
				},
				{
					title: "Maddie Lee", 
					link: "https://leeh779.github.io/assignment-1/index.html"
				},
				{
					title: "Phoebe Tseng", 
					link: "https://tsenp811.github.io/phoebet_webadvancedjavascript/"
				},
				{
					title: "Juna Lee", 
					link: "https://leej869.github.io/Assignment_1/"
				},
				{
					title: "ZiJia Chen", 
					link: "http://b.parsons.edu/~chenz352/webadvanced/"
				},
				{
					title: "Yeji Kim", 
					link: "https://javascript-index.glitch.me"
				},
				{
					title: "Vlora Bajrushi", 
					link: "https://bajrushivlora.github.io/Assignment-One-/"
				},
				{
					title: "Elliot Bohlen", 
					link: "https://elliotbohlen.github.io/assn1/homepage/"
				},
				{
					title: "Bernadette Figueroa", 
					link: "https://berniefigs.github.io/web_advanced/index.html"
				},
				{
					title: "Ricky Xie", 
					link: "https://xier892.github.io"
				},
				{
					title: "Yu-Ying Lee", 
					link: "https://leey611.github.io/web_assignment1/"
				},
				{
					title: "Alicia (Yuting) Pan", 
					link: "https://alic3579.github.io/index/"
				},
				{
					title: "Michael Braverman", 
					link: "http://mbrav.com/2019.js/"
				},
				{
					title: "Connie XU", 
					link: "https://xuc009.github.io/assignment-1-index/index.html"
				}
			]
		},
		{
			title: "Class Links",
			list: [
				{
					title: "Class Syllabus",
					link: "files/PSAM_3210_A_EIGLER-HARDING_FA19.pdf"
				},
				{
					title: "Are.na Channel (Readings + Resources)",
					link: "https://www.are.na/lukas-eigler-harding/f19-webadvanced"
				},
				{
					title: "Class Lectures",
					link: "lectures/index.html"
				},
				{
					title: "Class Exercises",
					link: "exercises/index.html"
				}
			]
		}
	]

	


	contents.forEach(function(content, index){

		if(index === 0 ){
			document.querySelector("#root").innerHTML += `<span class="past_event" onclick="Site.openDrawer(event)">${Site.basicContent(content)}</span>`
		}else{
			document.querySelector("#root").innerHTML += `<span class="past_event hidden" onclick="Site.openDrawer(event)">${Site.basicContent(content)}</span>`
		}		

	})




	resources.forEach(function(resource){
		document.querySelector("#root").innerHTML += `${Site.Resources(resource)}`;
	})


}
