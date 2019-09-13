window.onload = function(){

	var contents = [
		{
			day: "Friday, September 13",
			list: [
				`<a target="_blank" href="https://docs.google.com/spreadsheets/d/17x37V9wdFWnQLyZS9iHwZPquyVj36RixKa6eixHFVOU/edit?usp=sharing">Assignment 1 (Index) Spreadsheet</a>`,
				`Assignment 2, Pattern Readings`,
				`Assignment 2, Pattern Review`,
				`Lecture: <a href="lectures/index.html">Javascript loops, DOM, and template literals</a>`,
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
			title: "Resources",
			list: [
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
				}
			]
		},
		{
			title: "Class Links",
			list: [
				{
					title: "Class Syllabus",
					link: "https://arena-attachments.s3.amazonaws.com/4925664/a211189c7746cf80e8af048666ca405d.pdf?1567176390"
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

	contents.forEach(function(content){
		document.querySelector("#root").innerHTML += `${Site.basicContent(content)}`
	})

	resources.forEach(function(resource){
		document.querySelector("#root").innerHTML += `${Site.Resources(resource)}`;
	})

	

}
