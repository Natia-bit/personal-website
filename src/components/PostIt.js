import Image from "next/image";

export default function PostIt({
  title,
  color = "yellow",
  iconSrc,
  imageWidth,
  imageHeight,
  children,
}) {
  return (
    <div>
      <h3>{title}</h3>
      {iconSrc && (
        <Image
          src={iconSrc}
          alt={`${title} icon`}
          width={imageWidth}
          height={imageHeight}
        />
      )}
      <div>{children}</div>
    </div>
  );
}
