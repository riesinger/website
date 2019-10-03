const ProjectPreview = ({ org, name, img, tags, description, url }) => (
	<article className="shadow-md mx-2 my-2 flex-1 rounded-lg overflow-hidden min-w-300 flex flex-col bg-white">
		<img src={img ? img : '/static/img/project_placeholder.png'} className="w-full"/>
		<a href={url}>
			<h4 className="text-2xl mx-4 mt-2"><span className="text-gray-600">{org} / </span><span className="text-background-gray">{name}</span></h4>
		</a>
		<p className="mx-4 mt-2 flex-1">{description}</p>
		<ul className="mx-4 mt-4 mb-2">
			{tags.map(tag => <li className="bg-purp text-white rounded inline-block mr-2 mb-2 py-1 px-4 text-xs">{tag}</li>)}
		</ul>
	</article>
);

export default ProjectPreview;
