window.onload = function(){

	var contents = [
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
