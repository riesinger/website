import Link from 'next/link';

const Navigation = ({light}) => (
	<nav className={`${light ? 'bg-white text-gray-900': 'bg-gray-900 text-white'} px-8 py-4 flex items-center`}>
		<Link href='/'>
			<img src='/static/img/icon_plain_large_padding.svg'/>
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
