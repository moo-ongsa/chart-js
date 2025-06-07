import React from "react";
import { UPLOADS_URL } from "@/utils/env";
import NextImage from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
}) => (
  <NextImage
    src={UPLOADS_URL + src}
    alt={alt}
    width={width}
    height={height}
    className={className}
  />
);

export default Image;
