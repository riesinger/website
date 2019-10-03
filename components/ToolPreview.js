const ToolPreview = ({name, description, url, icon}) => (
	<article className="shadow-md mx-2 my-2 flex-1 rounded-lg overflow-hidden min-w-300 flex flex-col md:flex-row p-4 bg-white">
		<img src={icon ? icon : '/static/img/emojis/hammer_and_wrench.png'} className="w-32 h-32 flex-0" />
		<div className="flex-1">
			<a href={url}><h4 className="text-2xl mx-4 mt-2 text-background-gray">{name}</h4></a>
			<p className="mx-4 mt-2 flex-1">{description}</p>
			<a href={url} className="block mx-4 mt-2 mb-2 text-purp">{url}</a>
		</div>
	</article>
);

export default ToolPreview;
