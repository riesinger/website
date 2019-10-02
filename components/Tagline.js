import { useState, useEffect } from 'react';

const typingSpeed = 80;
const retentionTime = 1000 / typingSpeed;

const Tagline = ({taglines}) => {
	// FIXME: This is pretty ugly, clean this up.
	const [state, setState] = useState('typing');
	const [currTagline, setCurrTagline] = useState(0);
	const [currChar, setCurrChar] = useState(0);
	const [currTaglineText, setCurrTaglineText] = useState('');
	const [waitTicks, setWaitTicks] = useState(0);

	function updateTagline() {
		switch (state) {
			case 'typing':
				setCurrChar((currChar + 1));
				if (currChar > taglines[currTagline].length) {
					setState('waiting');
				} else {
					setCurrTaglineText(taglines[currTagline].substring(0, currChar));
				}
				break;
			case 'waiting':
				setWaitTicks(waitTicks + 1);
				if (waitTicks > retentionTime) {
					setWaitTicks(0);
					setState('deleting');
				}
				break;
			case 'deleting':
				setCurrChar(currChar - 1);
				if (currChar <= 0) {
					setCurrTagline((currTagline + 1) % taglines.length);
					setState('typing');
				}
				setCurrTaglineText(taglines[currTagline].substring(0, currChar));
				break;
		}
	}

	useEffect(() => {
		const interval = window.setInterval(updateTagline, typingSpeed);
		return function cleanup() {
			window.clearInterval(interval);
		}
	});

	return (
		<div className="flex-grow -mb-10 h-32 w-full md:mb-0 md:ml-20 md:w-auto md:h-auto">
			<div className="px-6 py-4 text-2xl bg-gray-100 text-gray-700 rounded w-full relative md:top-30 shadow-md">
				Hi, I'm <span className="text-purp">Pascal</span>,<br />
				<span>
					{currTaglineText}
				</span>
				<span style={{
					'animation': 'cursor-blink .5s infinite linear'
				}} className="inline-block mx-1">|</span>
			</div>
		</div>
	);
}
export default Tagline;
