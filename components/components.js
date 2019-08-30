var Site = {};

Site.basicContent = function(post){
	
	var listitems = "";
	var assignment = "";

	post.list.forEach(function(listitem){
		listitems += `<li>${listitem}</li>`;
	})

	post.assignment.forEach(function(paragraph){
		assignment += `<p>${paragraph}</p>`;
	})

	return `<section>
	<h2>${post.day}</h2>
	<ul>${listitems}</ul>
	<h3>${post.assignmentTitle}</h3>
	${assignment}
	</section>`;
};
