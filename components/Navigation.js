import Link from 'next/link';

const Navigation = ({light}) => (
	<nav className='py-4 flex items-center'>
		<Link href='/'>
			<img src='/static/img/icon_plain_small_padding.svg'/>
		</Link>
		<ul className='ml-auto'>
			<li>
				<Link href='/blog'>
					<a>Blog</a>
				</Link>
			</li>
		</ul>
	</nav>
);

export default Navigation;
