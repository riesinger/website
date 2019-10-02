import Navigation from './Navigation';
import Container from './Container';

const Layout = ({light, children}) => (
	<div>
		<header className={`${light ? 'bg-white text-background-gray' : 'bg-background-gray text-white'}`}>
			<Container>
				<Navigation light={light}/>
			</Container>
		</header>
		<main className="text-gray-700">
			{children}
		</main>
		<footer>
		</footer>
	</div>
)

export default Layout;

