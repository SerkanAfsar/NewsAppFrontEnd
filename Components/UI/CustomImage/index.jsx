import Image from "next/image";

export default function CustomImage({
  isLayout = false,
  src,
  width,
  height,
  altTag,
  ...rest
}) {
  if (isLayout) {
    return <Image src={src} layout="fill" alt={altTag} {...rest} />;
  }
  return (
    <Image src={src} width={width} height={height} alt={altTag} {...rest} />
  );
}
