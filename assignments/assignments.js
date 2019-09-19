window.onload = function(){

	var contents = [
		{
			day: "Assignment 2",
			list: [],
			assignmentTitle : "",
			sections: [
				{
					title: `Week 3 (for Sept 27)`,
					paragraphs: [
						`For next week, please evolve your pattern to animate using either <code>setTimeout</code> or <code>setInterval</code>. Consider how the introduction of movement influences your pattern&rsquo;s reveal.`,
						`Will you introduce easing via the css <code>transition</code> or <code>@keyframe</code> attributes? Will the site animate as it fills or will individual units animate on their own?`,
						`How will your animation influence how we understand the window&rsquo;s spatial dimensions?`
					]
				},
				{
					title: `Week 2 (for Sept 20)`,
					paragraphs: [
					`For next week, please evolve your pattern into a more complex nested set of elements. You should also convert your strings into template literals.`
					]
				},
				{
					title: `Week 1 (for Sept 13)`,
					paragraphs: [
					'For next week, you should have an initial looping pattern with at least two changing variables. <br>Please also prepare at least one question in response to each reading.'
					]
				},
				{
					title: `Brief`,
					paragraphs: [
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
			]
		},
	];


	contents.forEach(function(content){
		document.querySelector("#root").innerHTML += `${Site.lectureContent(content)}`
	})

}
