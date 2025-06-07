import { CoffeeReadings } from "../entities/CoffeeReadings";
import { EducationChannel } from "../entities/EducationChannels";
import { SocialMedia } from "../entities/SocialMedia";

export interface ICoffeeContentOpportunityGetAllResponse {
  coffeeReadings: CoffeeReadings;
  socialMedias: SocialMedia[];
  educationChannels: EducationChannel[];
}
