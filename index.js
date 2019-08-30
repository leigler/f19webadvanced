window.onload = function(){

	var contents = [
		{ 
			day: "Friday, August 30",
			list: [
				"Introductions, <a target='_blank' href='https://arena-attachments.s3.amazonaws.com/4925364/6282368f5ad5a6b105099135fee208f3.pdf' >Syllabus Review</a>, Expectations", 
				"Discussion: HTML/CSS Review",
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
	]

	contents.forEach(function(content){
		document.querySelector("#root").innerHTML += `${Site.basicContent(content)}`
	})

}
