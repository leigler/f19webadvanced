

window.onload = function(){

	var contents = [
		{
			day: "Assignment 3",
			list: [],
			assignmentTitle : "",
			sections: [
				{
					title: `Initial API Selection and Designs: Week 1 (for Oct 11)`,
					paragraphs: [
					`For next week, please prepare two initial design directions (static) for this assignment. These directions should include the selection of both a public <a target="_blank" href="https://github.com/public-apis/public-apis">API</a> (with no Authentication necessary), and a Javascript Library.`
					]
				},
				
				{
					title: `Brief`,
					paragraphs: [
					`Duration: 3 weeks`,
					`You will create an interactive single-page website that utilizes asynchronous loading from at least one external data source (an API) and explores at least one Javascript Library. This site will be designed with the goal to re-contextualize your data source(s) and generate unique interface moments.`,
					`On a technical level, this assignment will allow you to further develop an understanding for javascript-written interfaces and the components they are made of.`,
					`Readings: <ul>
						<li><a target="_blank" href="https://arena-attachments.s3.amazonaws.com/2597972/2065c555bbd04503da9df3d3ec5052dc.pdf?1535137003">On Weaving, Chapter Ten: Designing as Visual Organization</a> by Anni Albers</li>
						<li><a target="_blank" href="http://www.cond.org/deception.pdf">Benevolent Deception in Human Computer Interaction</a> Eytan Adar, Desney S. Tan, and Jaime
Teevan</li>
					</ul>`
					]
				},
			]
		},
	];


	contents.forEach(function(content){
		document.querySelector("#root").innerHTML += `${Site.lectureContent(content)}`
	})

}
