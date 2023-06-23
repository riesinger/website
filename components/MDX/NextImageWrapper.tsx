import NextImage from "next/legacy/image";

const NextImageWrapper = ({ src, height, width, ...props }) => {
  return (
    <NextImage
      layout="responsive"
      src={src}
      height={height}
      width={width}
      {...props}
    />
  );
};

export default NextImageWrapper;
