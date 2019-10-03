window.onload = function(){

	var contents = [
		{
			day: "Javascript: DOM Manipulation, querySelectors, eventListeners, and Libraries",
			list: [],
			assignmentTitle: `<a target="_blank" href="../files/f19-sept-27.zip">Lecture Files</a>`,
			sections : [
				{
					title: "querySelectors",
					paragraphs: [
						`JavaScript methods are actions that can be performed on objects.`,
						`getElementById is performed on the document object:<br>
							<code>var element = document.getElementById(id);</code><br>
							where getElementById is a method that returns an element object.
						`, 
						`getElementsByClassName is another method:<br>
						<code>var elements = document.getElementsByClassName(class);</code><br>
						getElementsByClassName returns an array of element objects by class.`, 
						`querySelector utilizes any CSS selector (element, id, class) to select the first returned Element object:<br>
						<code>var element = document.querySelector(div#anId);</code><br>
						<code>var element = document.querySelector(body);</code>
						<code>var element = document.querySelector(h1.primary_header);</code>
						`, 
						`querySelectorAll also utilizes any CSS selector but returns an array of matching element objects:<br>
							<code>var elements = document.querySelector(p.my_content);</code><br>
						`]
				},
				{
					title: "eventListeners",
					paragraphs : [
					`The <code>addEventListener()</code> method introduces interactivity to elements on the page. Below are a few examples:`,
				
					`For example, a click event: 
					<pre><code>var myButton = document.getElementById("my_button");

myButton.addEventListener("click", function(){
	console.log("doing stuff")
})
</code></pre>
You can also abstract this function (which also allows you to remove the EventListener):
<pre><code>var myButton = document.getElementById("my_button");

var doingStuff = function(){
	console.log("doing stuff")
	myButton.removeEventListener("click", doingStuff)
}

myButton.addEventListener("click", doingStuff)

					</code></pre>`,
'A few more eventListeners include:', 
`Mouseover:<pre><code>var myButton = document.getElementById("my_button");

myButton.addEventListener("mouseover", function(){
	console.log("mouse has entered button")
})
</code></pre>`,
`Mouseout:<pre><code>var myButton = document.querySelector("#my_button");

myButton.addEventListener("mouseout", function(){
	console.log("mouse has left button")
})
</code></pre>`,
`Mousemove (here we call the entire window):
<pre><code>window.addEventListener("mousemove", function(){
	console.log("mouse is moving on the screen")
})
</code></pre>`,
`Scrolling:
<pre><code>var DOM = document.querySelector("body");

var scrolling = function(){

  console.log(window.scrollY) // how far down the document we've scrolled

};

window.addEventListener("scroll", scrolling)
</code></pre>

`,
`Scrolling (percentage):
<pre><code>var DOM = document.querySelector("body");

var scrolling = function(){

  console.log(window.scrollY) // how far down the document we've scrolled
  console.log(window.innerHeight) // the height of our browser window
  console.log(DOM.offsetHeight) // the height of our body element

  // percentage of scroll:
  var percentageScrolled = window.scrollY / (DOM.offsetHeight - window.innerHeight);
  console.log(percentageScrolled);

};

window.addEventListener("scroll", scrolling)
</code></pre>

`, 
`Scrolling to a specific point:<br>
Using the <code>getBoundingClientRect()</code> method, we can retrieve certain qualities of a given element.
<pre><code>var checkpoint = document.getElementById("#checkpoint");

var scrolling = function(){
  if(checkpoint.getBoundingClientRect().top + checkpoint.getBoundingClientRect().height < 0) {
	console.log("whole element is past!");
  }else if(checkpoint.getBoundingClientRect().top < 0) {
	console.log("top has past!");
  }
};

window.addEventListener("scroll", scrolling)
</code></pre>

`]
				},
				{
					title: "Inline Events",
					paragraphs: [
					`In addition to eventListeners, you can also call functions inline:
					<br>Javascript:
					<pre><code>var rotation = function(element){
  console.log(element);
  element.style.color = "red";

}</code></pre>
					HTML:
					<pre><code>&lt;button onclick="rotation(this)">Click Me&lt;/button></code></pre>`
					]
				},
				{
					title: "Exercise",
					paragraphs: [
					`Create a simple interface consisting of a single button.`,
					`The button itself should have a click EventListener that adds additional elements to the site. <i>The site as a whole</i> should have at least two additional EventListeners (mousemove, mouseover, scroll, etc) for a total of three interactive features.`
					]
				}
			]
		},
		{
			day: "Javascript Basics, Pt 3: functions, setTimeout, and setInterval looping",
			list: [],
			assignmentTitle : `<a target="_blank" href="../files/f19-sept-20.zip">Lecture Files</a>`,
			sections: [
				{
					title: `<a target="_blank" href="https://youtu.be/cNRsDMX207M">Live Stream @ 9am</a>`,
					paragraphs : []
				}
			]
		},
		{
			day: "Javascript Basics, Pt 2: While loops, Template literals, and the Math object",
			list: [],
			assignmentTitle : `<a target="_blank" href="../files/f19-sept-13.zip">Lecture Files</a>`,
			sections: [
				{
					title: `While loops`,
					paragraphs: [
						"A while loop continues until its conditional is no longer true.",
						`<pre><code>var i = 0;

while (i < 10) {
    console.log("The number is " + i);
    i++;
}</pre></code>
`
					]
				},
				{
					title: `Template Literals`,
					paragraphs: [
						"template literals are an extension of the classic <code>'string'</code> that allow for embedded expressions:",
							"Template literals are denoted with the back-tick: <code>` template literal `</code>",
							`<pre><code>var title = "My Website Title";
var content = "Integer posuere erat a ante venenatis dapibus posuere velit aliquet.";

var myVariable = &#96;

 &lt;div>
	&lt;h1>&#36;{title}&lt;/h1>
	&lt;p>&#36;{content}&lt;/p>
 &lt;/div>

&#96;
</code></pre>`,
					]
				},
				{
					title: `Appending to the DOM`,
					paragraphs: [
					`in addition to the innerHTML method we learned last class, we also can append specific elements to the DOM with the <code>append</code> method:`,
						`<pre><code>var element = document.createElement("div");
element.className = "important";

var content = "some content",
    subtitle = "a subtitle";

element.innerHTML = &#96;

  &lt;h1>&#36;{subtitle}&lt;/h1>
  &lt;p>&#36;{content}&lt;/p>

&#96;

document.querySelector('#wrapper').appendChild(element);


</code></pre>`,
					`or with <code>element.insertAdjacentHTML(position, text);</code>:`,
					`<pre><code>var content = "some content",
    subtitle = "a subtitle";

var myTemplate = &#96;

  &lt;h1>&#36;{subtitle}&lt;/h1>
  &lt;p>&#36;{content}&lt;/p>

&#96;

document.querySelector('#wrapper').insertAdjacentHTML('beforeend', myTemplate)


</code></pre>`,
`which has the options of <br><code>'beforebegin'</code><br>
<code>'afterbegin'</code><br>
<code>'beforeend'</code><br>
<code>'afterend'</code><br>`



					]					
				},
				{
					title: `Javascript&rsquo;s Math object`,
					paragraphs: [
						"The javascript Math object* allows you to perform mathematical tasks on numbers.",
						"*javascript’s Math object is a built-in object that has properties and methods for mathematical constants and functions. Not a function object (we will go over what objects are in a later lecture).",
						"Random Method:<br><code>Math.random()</code> Generates a random number between 0 and 1.<br>In order to generate a random number between 0 and 10: <code>Math.random() * 10</code>.",
						`Rounding Method:
						<br><code>Math.round(3.7);</code> Rounds input to nearest integer, in this case 4.
						<br><code>Math.ceil(8.3);</code> Rounds up to the smallest integer greater than or equal to our input, in this case 9.
						<br><code>Math.floor(8.3);</code>Rounds down to the largest integer less than or equal to our input, in this case 8.`,
						"In order to generate a random integer between 0 and 10:<br><code>Math.floor(Math.random() * 10)</code>"
					]
				}
			]
		},
		{
			day: "Javascript Basics, Pt 1: Variables, the console, Conditionals, and Loops",
			list: [],
			assignmentTitle : "",
			sections: [
				{
					title: `Example Files`,
					paragraphs: [
					'The demo files from this lecture can be found <a target="_blank" href="../files/javascript-lecture-1.zip">here</a>'
					]
				},
				{
					title: `Loading your Javascript`,
					paragraphs: [
					'We use the <code>&lt;script&gt;</code> tag to connect our HTML page with our JavaScript file as follows:',
					'<code>&lt;script type="text/javascript" src="path/file.js"&gt;&lt;/script&gt;</code>'
					]
				},
				{
					title: `Datatypes`,
					paragraphs: [
					`String: <code>"string"</code><br /> Strings are used to store textual information.`, 
					`Number: <code>2.2</code> or <code>2</code><br /> Numbers are used to represent numerical data.`,
					`Boolean: <code>true</code> <code>false</code><br />Booleans are used to represent a binary value (true or false).`,
					`Array: <code> ["an", "array", "holds", "other", "datatypes"] </code>`,
					`Objects: <code>{"objectname" : "datatype", "nestedarray" : [1, 2, 3, 4]}</code>`
					]
				},
				{
					title: 'Arrays',
					paragraphs: [
						`Arrays can be thought of as lists of data types. A collection of information— potentially with mixed values.`,
						`The basic format of an array starts with [, ends with ], and has each value separated by a ,. Whitespaces are ignored but help with legibility.`
					]
				},
				{
					title: 'Array Details',
					paragraphs: [
						`<code>Array length: ["red", "white", "blue"].length => 3 </code>
							<br />Note: First element at zero, last element at one less than array length.`
					]
				},
				{
					title: `Variables`,
					paragraphs: [
						`Declaration: var myVariable; (returns undefined)`,
						`Assignment: <code>myVariable = 3;</code>`,
						`Declaration and Assignment: <code>var myVariable = 3;</code>`,
						`Reassignment:<br>
							<code>var className = 'Web Advanced'</code><br />
							<code>className = 'Web Advanced: Javascript'</code>`
					]
				},
				{
					title: `Operators and Relations`,
					paragraphs: [
						`
							Less than: <code><</code><br>
							Greater than: <code>></code><br>
							Less than or equal to: <code><=</code><br>
							Greater than or equal to: <code>>=</code>
						`,
						`
							<code>==</code> datatype converting comparison <br>
							<code> 2 == 2</code> true<br>
							<code> 2 == 3</code> false<br>
							<code> "hi" == "hi"</code> true<br>
							<code> 2 == "2"</code> true<br>
							<br>
							<code>===</code> strict comparison <br>
							<code> 2 == 2</code> true<br>
							<code> 2 == "2"</code> false<br>
							<br>
							<code>!=</code> not equal (type-converting comparison)
							<code> 2 != 2</code> false<br>
							<code> 2 != 3</code> true<br>
							<code> "hi" != "hi"</code> false<br>
							<code> "hi" != "hello"</code> true<br>
							<code> 2 != "2"</code> false<br>
							<br>
							<code>!==</code> strict comparison <br>
							<code>2 !== "2"</code> true<br>
							<code> 2 !== 2</code> false<br>
							<code>2 !== 3</code> true<br>
						`
					]
				},
				{
					title: "If Statements",
					paragraphs: [
					`<pre><code>if( true ){ 
		}
	// do something
}</code></pre>`,
					`<pre><code>if( true ){
	// do something
}else{
	// do something else
}</code></pre>`,
					`<pre><code>if( true ){
	// do something
}else if( false ){
	// do something
}</code></pre>`
					]
				},
				{
					title: "And (&&), Or (||)",
					paragraphs: [
					`<pre><code> var className = "Web Advanced";
var school = "Parsons";
if( className === "Web Advanced" && school === "Parsons" ){
	console.log("Correct!");
}</code></pre>`,
					`<pre><code>if( className === "Web Advanced" || school === "Parsons" ){
	console.log("Almost there")
}</code></pre>`
					]
				},
				{
					title: "Basic Math",
					paragraphs : [
						`<pre><code> 1 + 1 = 2 // Addition
1 - 1 = 0 // Subtraction
5 * 3 = 15 // Multiplication
10 / 2 = 5 // Division
(10 + 2)/6 = 2 // Order of Operations
10 + 2/6 = 10.3333334

4 % 2 = 0 // Modulus
5 % 2 = 1
						</code></pre>`,
						`Increment: <code>myVar = myVar + 1;</code><br><code>myVar++;</code>`,
						`Decrement: <code>myVar = myVar - 1;</code><br><code>myVar--;</code>`
					]
				},
				{
					title: "For Loop",
					paragraphs: [
					`<pre><code>for (var multiplier = 1; multiplier <= 10; multiplier++) {
	var result = multiplier * 6;
	console.log(result);
}</pre></code>
`
					]
				},
				{
					title: "Array Iteration",
					paragraphs: [
					`<pre><code>var array = [1, 2, 3];
for (var counter = 0; counter < array.length; counter++) {
   console.log(array[counter]);
}
</pre></code>
`
					]
				},
				{
					title: "Array Iteration/Appending to the DOM",
					paragraphs: [
					`To add new elements to your html document via javascript:<br>
					1) Make sure you have an existing element to append your new elements to.<br>
					2) Create your element in javascript: var element = document.createElement("div");<br>
					3) Give your new element a class name: element.className = "important"<br>
					4) to populate your element, you have several options:`,
					`<pre><code>var element = document.createElement("div");
element.className = "important"

var node = document.createTextNode("some text");
element.appendChild(node);
document.getElementById('body').appendChild(element)
</pre></code>
`,
`<pre><code>
var element = document.createElement("div");
element.className = "important"

var content = "some content",
		subtitle = "a subtitle"

element.innerHTML = &grave;

	&lt;h1>&#36;{content}&lt;/h1>
	&lt;h2>&#36;{subtitle}&lt;/h2>

&grave;

document.getElementById('wrapper').appendChild(element);

</pre></code><br>
where <code>&#36;{variable}</code> is used to output any changing content.<br><br>
`,
`Another alternate is using innerHTML immediatly: 
<pre><code>var content = "Greetings",
    element = &grave;&lt;h1>&#36;{content}&lt;/h1>&grave;;

document.getElementById('wrapper').innerHTML = element;

</pre></code>`
					]
				}
			]
		},
	];


	contents.forEach(function(content){
		document.querySelector("#root").innerHTML += `${Site.lectureContent(content)}`
	})

}
