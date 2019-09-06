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
	<hr />
	</section>`;
};

Site.lectureContent = function(post){
	
	var sections = "";

	post.sections.forEach(function(section){
		sections += `<h3>${section.title}</h3>`;
		
		section.paragraphs.forEach(function(paragraph){
			sections += `<p>${paragraph}</p>`;
		})
		
	})

	return `<section>
	<h2>${post.day}</h2>
	<h3>${post.assignmentTitle}</h3>
	${sections}
	<hr />
	</section>`;
};

Site.Resources = function(resources){

	let resourcelist = "";

	resources.list.forEach(function(listitem){
		resourcelist += `<li><a target="_blank" href="${listitem.link}">${listitem.title}</a></li>`;
	})

	return `<section>
		<h2>${resources.title}</h2>
		<ul>${resourcelist}</ul>
		<hr />
	</section>`;

}
