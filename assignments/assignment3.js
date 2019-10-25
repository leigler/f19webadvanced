

window.onload = function(){

	var contents = [
		{
			day: "Assignment 3",
			list: [],
			assignmentTitle : "",
			sections: [
				{
					title: `Week 4`,
					paragraphs: [
					`For next week, finalize your site and be prepared to share.`
					]
				},
				{
					title: `Week 3`,
					paragraphs: [
					`In addition to incorporating the feedback you received today in class, for next week, please begin integrating your API into your front end. Consider which elements can start without your content and which need to wait for your request to finish.`
					]
				},
				{
					title: `Week 2`,
					paragraphs: [
						`Based on your conversations in class today, please select a design direction and begin building it out.`,
						`Your assignment for next week consists of two parts: <br>1. Build out your chosen design with the javascript library of your choosing. You should use this opportunity to experiment with the library. Since you&rsquo;re working with an unfamiliar library, expect your building process to be fluid. For next week, your &ldquo;front-end&rdquo; should be well underway and ready for integration with your API.`,
						`2. Write a small sketch using this <a href="../files/f19-oct-11/boilerplate-fetch.zip">boilerplate</a> to successfully fetch data from your chosen API. This does not yet need to be integrated, but should <code>console.log()</code> the data you will use in this project. Remember to use a local server <code>php -S 127.0.0.1:8000/</code> (or glitch) to properly fetch your data.`,
						`Additionally, please read <a target="_blank" href="https://arena-attachments.s3.amazonaws.com/5225470/3b167a5b05fceecb01b620934e49e8a2.pdf?">The Policeman&rsquo;s Beard is Half Constructed</a><br>
						<a target="_blank" href="http://www.cond.org/deception.pdf">Benevolent Deception in Human Computer Interaction</a> by Eytan Adar, Desney S. Tan, and Jaime Teevan`
					]
				},
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
					`Readings:<br>
						<a target="_blank" href="https://arena-attachments.s3.amazonaws.com/5225470/3b167a5b05fceecb01b620934e49e8a2.pdf?">The Policeman&rsquo;s Beard is Half Constructed</a><br>
						<a target="_blank" href="http://www.cond.org/deception.pdf">Benevolent Deception in Human Computer Interaction</a> Eytan Adar, Desney S. Tan, and Jaime Teevan<br>
						<a target="_blank" href="https://arena-attachments.s3.amazonaws.com/2597972/2065c555bbd04503da9df3d3ec5052dc.pdf?1535137003">On Weaving, Chapter Ten: Designing as Visual Organization</a> by Anni Albers`
					]
				},
			]
		},
	];

	var libraries = [
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
			title: "Javascript APIs",
			list: [
				{
					title: "Public APIs",
					link: "https://github.com/public-apis/public-apis"
				}
			]
		}
	]


	contents.forEach(function(content, index){
		document.querySelector("#root").innerHTML += `<span class="past_event" onclick="Site.openDrawer(event)">${Site.lectureContent(content)}</span>`
	})

	libraries.forEach(function(resource){
		document.querySelector("#root").innerHTML += `${Site.Resources(resource)}`;
	})

}
