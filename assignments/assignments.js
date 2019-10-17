window.onload = function(){

	var contents = [
		{
			day: "Assignment 2",
			list: [],
			assignmentTitle : "",
			sections: [
				{
					title: `Finalize: Week 5 (for Oct 11)`,
					paragraphs: [
					`For next week, finalize your pattern and it&rsquo;s interface. You should prepare to demo your pattern to the class.`,
					`In planning your demo, consider:
					<ul>
						<li>How you might successfully show the different aspects of your pattern&rsquo;s interface.</li>
						<li>How you might communicate what you were interested in originally and how the pattern has evolved.</li>
					</ul>`,
					`Be prepared to navigate to your pattern from your github Index page. You will demo your pattern on it&rsquo;s own—<i>there is no need to make a presentation document.</i>`
					]
				},
				{
					title: `Week 4 (for Oct 4)`,
					paragraphs: [
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
					`Duration: 5 weeks`,
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


	contents.forEach(function(content, index){
		
		if(index === 0){
			document.querySelector("#root").innerHTML += `<span onclick="Site.openDrawer(event)" class="past_event">${Site.lectureContent(content)}</span>`
		}else{
			document.querySelector("#root").innerHTML += `<span onclick="Site.openDrawer(event)" class="past_event hidden">${Site.lectureContent(content)}</span>`
		}
	})

}
