import { Level } from "./Level";

export interface SpecialistCommon {
  id: number;
  image: string;
  name: string;
  percent: number;
  sub: string;
  level: Level[];
}
