import Image from "next/image";

export function CaseFigure({
  src,
  alt,
  caption,
  width,
  height,
  maxWidth,
  light = false,
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  maxWidth?: number;
  light?: boolean;
}) {
  return (
    <figure className="m-0" style={maxWidth ? { maxWidth } : undefined}>
      <div
        className={`overflow-hidden rounded-[14px] border border-line ${light ? "bg-white" : "bg-bg-raise"}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={maxWidth ? `${maxWidth}px` : "(min-width: 1024px) 700px, 90vw"}
          loading="lazy"
          className="block h-auto w-full"
        />
      </div>
      <figcaption className="mt-[1.1rem] text-[.85rem] leading-[1.55] text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}
