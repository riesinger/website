import Navigation from './Navigation';
import Container from './Container';
import Footer from './Footer';

const Layout = ({light, children}) => (
	<div className="overflow-x-hidden">
		<header className={`${light ? 'bg-white text-background-gray' : 'bg-background-gray text-white'}`}>
			<Container>
				<Navigation light={light}/>
			</Container>
		</header>
		<main className="text-gray-600 bg-gray-100 pb-16">
			{children}
		</main>
		<Footer />
	</div>
)

export default Layout;

