import NextImage from "next/image";

const NextImageWrapper = ({ src, alt, height, width, ...props }) => {
  return (
    <NextImage
      alt={alt}
      src={src}
      height={height}
      width={width}
      className="mx-auto"
      {...props}
    />
  );
};

export default NextImageWrapper;
