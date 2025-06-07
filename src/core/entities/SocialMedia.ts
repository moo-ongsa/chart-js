import { RoastLevelItem } from "./RoastLevelItem";

export interface SocialMedia {
  id: number;
  image: string;
  name: string;
  percent: number;
  level: RoastLevelItem[];
}
