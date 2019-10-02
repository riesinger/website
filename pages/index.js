import '../style.css';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Tagline from '../components/Tagline';
import TooltipButton from '../components/TooltipButton';

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
				<h2 className="my-2 text-4xl text-background-gray">Posts</h2>
			</Container>
		</section>
		<section className="mb-16">
			<Container>
				<h2 className="my-2 text-4xl text-background-gray">Current Projects <TooltipButton>These are the Github repositories I most recently contributed to</TooltipButton></h2>
			</Container>
		</section>
		<section className="mb-16">
			<Container>
				<h2 className="my-2 text-4xl text-background-gray">Tools</h2>
			</Container>
		</section>
	</Layout>
)

export default Index;
