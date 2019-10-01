import Navigation from './Navigation'

const Layout = ({light, children}) => (
	<div>
		<header>
			<Navigation light={light}/>
		</header>
		<main>
			{children}
		</main>
		<footer>
		</footer>
	</div>
)

export default Layout;

