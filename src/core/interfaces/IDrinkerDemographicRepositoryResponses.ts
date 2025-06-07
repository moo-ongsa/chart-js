import { AvgPricePreferred } from "../entities/AvgPricePreferred";
import { AvgSpending } from "../entities/AvgSpending";
import { Income } from "../entities/Income";
import { Preference } from "../entities/Preference";

export interface IDrinkerDemographicGetAllResponse {
  income: Income;
  womenWhoDrinkCoffee: string;
  avgCoffeeSpendingPerMonth: AvgSpending;
  avgCoffeePricePreferred: AvgPricePreferred;
  preference: Preference;
}
