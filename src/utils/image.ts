export const loadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    img.onload = () => {
      resolve(img);
    };

    img.onerror = (err: Event | string) => {
      const message =
        typeof err === "string"
          ? err
          : (err instanceof ErrorEvent && err.message) || "No error message";

      console.error(`Failed to load image: ${src}`, {
        src,
        err,
        message,
      });

      reject(err);
    };
  });
};
