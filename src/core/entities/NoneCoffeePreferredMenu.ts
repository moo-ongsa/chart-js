import { RoastLevelItem } from "./RoastLevelItem";

export interface NoneCoffeePreferredMenu {
  id: number;
  image: string;
  name: string;
  percent: number;
  level: RoastLevelItem[];
}
