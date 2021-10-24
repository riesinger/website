import styled from "@emotion/styled";

type LogoSize = "lg" | "md" | "sm";

interface LogoProps {
  size?: LogoSize;
}

const StyledSVG = styled.svg<{ size: LogoSize }>`
  height: ${({ size }) =>
    ({ lg: "3rem", md: "2.5rem", sm: "1.75rem" }[size || "md"])};
  color: var(--riesinger-colors-typeface-primary);
`;

const Logo = ({ size }: LogoProps) => {
  return (
    <StyledSVG
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 67 94"
      strokeWidth="6"
      stroke="currentColor"
      size={size}
    >
      <path d="M21 3H11C6.58172 3 3 6.58172 3 11V83C3 87.4183 6.58172 91 11 91H13C17.4183 91 21 87.4183 21 83V65M21 41V25" />
      <path d="M62.4846 74.4959C61.7022 73.1144 61.2499 72.2966 60.7937 71.4717L60.7937 71.4716C60.3339 70.6403 59.8702 69.8019 59.0731 68.3943C56.0653 63.0835 49.3057 61.2972 44.0522 64.3304C38.7791 67.3747 37.0183 74.0937 39.9958 79.3511C40.7781 80.7325 41.2304 81.5503 41.6865 82.3751L41.6867 82.3754C42.1465 83.2068 42.6101 84.0451 43.4073 85.4527C46.415 90.7635 53.1746 92.5498 58.4282 89.5167C63.7012 86.4723 65.462 79.7533 62.4846 74.4959Z" />
      <path d="M21.0588 3L14 3C7.92487 3 3 7.92487 3 14C3 20.0751 7.92488 25 14 25L21.0588 25L33.9412 25C38.9118 25 42.9412 29.0294 42.9412 34C42.9412 38.9706 38.9117 43 33.9412 43L14 43C7.92487 43 3 47.9249 3 54C3 60.0751 7.92486 65 14 65H21.0588H33C50.1208 65 64 51.1208 64 34C64 16.8792 50.1208 3 33 3L21.0588 3Z" />
    </StyledSVG>
  );
};

export default Logo;
