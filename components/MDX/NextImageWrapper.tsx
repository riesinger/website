import NextImage from "next/image";

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
