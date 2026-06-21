import type { AnchorHTMLAttributes, ImgHTMLAttributes } from "react";

type PortableLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function PortableLink({ href, children, ...props }: PortableLinkProps) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}

type PortableImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  eager?: boolean;
};

export function PortableImage({
  alt,
  eager = false,
  loading,
  decoding = "async",
  ...props
}: PortableImageProps) {
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      alt={alt}
      loading={loading ?? (eager ? "eager" : "lazy")}
      decoding={decoding}
      {...props}
    />
  );
}
