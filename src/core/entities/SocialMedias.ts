import { Level } from "./Level";

export interface SocialMedia {
  id: number;
  image: string;
  name: string;
  percent: number;
  level: Level[];
}
