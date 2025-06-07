import { RoastLevelItem } from "./RoastLevelItem";

export interface RoastLevel {
  id: number;
  name: string;
  abbreviate: string;
  percent: number;
  image: string;
  level: RoastLevelItem[];
}
