

window.onload = function(){

	var contents = [
		{
			day: "Assignment 4",
			list: [],
			assignmentTitle : "",
			sections: [
				{
					title: `Initial API Selection and Designs: Week 1 (for Nov 8)`,
					paragraphs: [
					`For next week, please read all three of the readings and prepare a question for each. Additionally find an object that shapes how its users behave (in Latour’s words: find an object that is an actor, or in Suri’s and Norman’s words: an object that has affordances and produces thoughtless acts).`,
					`Your object will act as the inspiration for this project, so feel free to photograph (or otherwise document) it, variations of it, and take time to learn about its history.`,
					`Next week will be spent discussing these objects in the context of the readings, as well as exploring the localStorage API through an exercise.`
					]
				},
				
				{
					title: `Brief`,
					paragraphs: [
					`Duration: 6 weeks`,
					`This assignment is meant to expand a student’s understanding of customized user experience and interactivity in a mobile context. Each student will select an object from which a user-site relationship will be translated.`,
					`Using your knowledge of Javascript so far, design and develop a linear relationship between a user’s actions and the visual rendering of a site. Using the localStorage API, consider what information you store about the user and their behaviour (i.e. time-visited, mouse movement, time spent on site), and to what degree/in what form this information is relayed back to the user upon each visit.`,
					`Similar to Latour&rsquo;s key and Suri&rsquo;s thoughtless acts (see readings below), keep in mind that the site should become increasingly personal, shaping itself to the individual user.`,
					`Readings:<br>
						<a target="_blank" href="http://www.bruno-latour.fr/sites/default/files/P-36-Berliner-KEY-GBpdf.pdf">The Berliner Key</a> by Bruno Latour<br>
						<a target="_blank" href="https://jnd.org/affordances_and_design/">Affordances and Design</a> by Don Norman<br>
						<a target="_blank" href="https://arena-attachments.s3.amazonaws.com/3476765/1b3df7e9a666ff9bd1eb2e24a1adaf2e.pdf?1548259343">Framing Thoughtless Acts</a> by Jane Fulton Suri<br>
						`
					]
				},
			]
		},
	];



	contents.forEach(function(content, index){
		document.querySelector("#root").innerHTML += `<span class="past_event" onclick="Site.openDrawer(event)">${Site.lectureContent(content)}</span>`
	})

}
