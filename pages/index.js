import '../style.css';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Tagline from '../components/Tagline';
import ProjectPreview from '../components/ProjectPreview';
import ToolPreview from '../components/ToolPreview';

const Index = () => (
	<Layout>
		<section className="bg-background-gray pt-16 mb-16">
			<Container className="flex justify-between flex-col items-center md:flex-row md:items-stretch">
				<img src="/static/img/me-transparent.png" />
				<Tagline taglines={['a student of computer science.', 'facinated by space.', 'a full-stack developer', 'an avid Linux user.']}/>
			</Container>
		</section>
		<section className="mb-16">
			<Container>
				<h2 className="my-2 text-4xl text-background-gray">Posts <img src="/static/img/emojis/writing_hand.png" className="inline-block w-8 h-8" /></h2>
			</Container>
		</section>
		<section className="mb-16">
			<Container>
				<h2 className="my-2 text-4xl text-background-gray">Current Projects <img src="/static/img/emojis/computer.png" className="inline-block w-8 h-8" /></h2>
				<p>My most active Github repositories</p>
				<div className="flex mt-2 -mx-2 flex-wrap">
					<ProjectPreview org="freecloudio" name="web" img="" tags={['typescript', 'webapp', 'react', 'freecloud', 'cloud', 'file-sharing', 'filehosting']} description="freecloud web client written in React + Typescript" />
					<ProjectPreview org="freecloudio" name="server" img="" tags={['go', 'golang', 'cloud', 'file-sharing', 'filehosting', 'freecloud']} description="The fast and free alternative personal cloud " />
					<ProjectPreview org="riesinger" name="website" img="" tags={['react', 'nextjs', 'tailwindcss', 'website']} description="My personal website" />
				</div>
			</Container>
		</section>
		<section className="mb-16">
			<Container>
				<h2 className="my-2 text-4xl text-background-gray">Tools <img src="/static/img/emojis/hammer_and_wrench.png" className="inline-block w-8 h-8" /></h2>
				<p>A collection of simple tools I created</p>
				<div className="flex mt-2 -mx-2 flex-wrap">
					<ToolPreview name="Rapla Filter" description="Filter for my uni courses' timetable" url="https://rapla.tools.riesinger.dev" icon="/static/img/tools/lecture_mod.png"/>
				</div>
			</Container>
		</section>
		<section className="">
			<Container>
				<h2 className="my-2 text-4xl text-background-gray">About me <img src="/static/img/emojis/thinking_face.png" className="inline-block w-8 h-8" /></h2>
				<article className="my-8 text-lg leading-relaxed">
				<p>
					I'm a <strong>student of computer science</strong> based in <strong>Karlsruhe</strong>. I'm working at SAP (<a className="text-purp" href="https://www.dhbw.de/english/dhbw/about-us.html">cooperative education</a>) and will receive my Bachelor's degree in 2020.
					I'm interested in Linux, free software, backend and frontend development as well as space. I use Vim as my primary editor (yes, I'm one of those guys) and care for online privacy and data protection.
					I try to learn as many technologies as I can, though lately I've been focusing on Typescript, React and Go.
				</p>
				</article>
			</Container>
		</section>

	</Layout>
)

export default Index;
