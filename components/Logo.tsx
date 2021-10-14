import styled from "styled-components";

type LogoSize = "lg" | "md" | "sm";

interface LogoProps {
	size?: LogoSize;
}

const StyledSVG = styled.svg<{ size: LogoSize }>`
	width: ${({ size }) => ({ lg: "3rem", md: "2.5rem", sm: "1.75rem" }[size || "md"])};
	height: ${({ size }) => ({ lg: "3rem", md: "2.5rem", sm: "1.75rem" }[size || "md"])};
	color: var(--riesinger-colors-typeface-primary);
`;

const Logo = ({ size }: LogoProps) => {
	return (
		<StyledSVG
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 100 100"
			strokeWidth="6"
			stroke="currentColor"
			size={size}
		>
			<path d="M39 8H29a8 8 0 00-8 8v72a8 8 0 008 8h2a8 8 0 008-8V70m0-24V30M62 69.4a11 11 0 00-4 15l1.7 3h0l1.7 3.1a11 11 0 0015 4c5.3-3 7-9.7 4-15l-1.6-3h0l-1.7-3a11 11 0 00-15-4.1z"></path>
			<path d="M39 8h-7a11 11 0 000 22h20a9 9 0 110 18H32a11 11 0 000 22h19a31 31 0 000-62H39z"></path>
		</StyledSVG>
	);
};

export default Logo;
