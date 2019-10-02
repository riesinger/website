const TooltipButton = ({children}) => (
	<div className="bg-gray-300 rounded-full w-8 h-8 text-base leading-loose text-center inline-block cursor-pointer">
		<span>?</span>
		<div className="hidden">{children}</div>
	</div>
);

export default TooltipButton;
