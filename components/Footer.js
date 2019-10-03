import Container from './Container';

const Footer = () => (
	<footer className="bg-background-gray py-8 text-gray-400">
		<Container>
			<section>
				<p className="mb-4">
					Content is licensed under the <a href="https://creativecommons.org/licenses/by/4.0/legalcode" className="text-purp">Creative Commons Attribution 4.0</a> license, unless noted otherwise. <br />
					Code snippets are licensed under the <a href="https://opensource.org/licenses/MIT" className="text-purp">MIT license</a>.
				</p>
				<p>&copy; { new Date().getFullYear() } &middot; Pascal Riesinger &middot; Built using <a href="https://nextjs.org/" className="text-purp">Next.js</a> and <a href="https://tailwindcss.com/" className="text-purp">Tailwindcss</a></p>
			</section>
		</Container>
	</footer>
);

export default Footer;
