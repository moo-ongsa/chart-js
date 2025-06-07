import { Province } from "./Province";

export interface UpcomingEvent {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  startTime: Date;
  endTime: Date;
  description: string;
  address: string;
  provinceId: string;
  subDistrictId: string;
  districtId: string;
  imageUrl: string | null;
  province_id: string;
  district_id: string;
  sub_district_id: string;
  province: Province;
}
