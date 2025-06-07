import { Color } from "chart.js";

/**
 * แปลงสี HSL เป็น Grayscale โดยการตั้ง saturation = 0%
 * และเพิ่ม lightness ได้ตามต้องการ
 *
 * @param hslColor - string เช่น "hsl(24, 94%, 68%)"
 * @param increaseLightness - number (default = 0)
 * @returns grayscale HSL string เช่น "hsl(24, 0%, 80%)"
 */
export const hslToGrayScale = (
  hslColor: string,
  increaseLightness: number = 0
): string => {
  const match = hslColor.match(/\d+/g);

  if (!match || match.length < 3) {
    throw new Error(`Invalid HSL color format: ${hslColor}`);
  }

  const [h, , l] = match.map(Number);
  const newLightness = Math.min(l + increaseLightness, 100);

  return `hsl(${h}, 0%, ${newLightness}%)`;
};

/**
 * สี HSL สำหรับ chart bar แสดงตาม rank (Top-down)
 */
export const backgroundColorRankingList: Color[] = [
  "hsl(24, 94%, 68%)",
  "hsl(31, 23%, 42%)",
  "hsl(41, 89%, 68%)",
  "hsl(16, 75%, 78%)",
  "hsl(3, 72%, 39%)",
  "hsl(196, 36%, 57%)",
  "hsl(152, 32%, 77%)",
];
