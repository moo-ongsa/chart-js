import { DashboardHeader } from "@/components/header/DashboardHeader";
import { Container } from "@/components/layouts/Container";
import CoffeeBeanPurchaseFactorsCard from "@/components/reports/coffeeBeanPurchaseFactorsCard/CoffeeBeanPurchaseFactorsCard";
import CoffeeContentOpportunityCard from "@/components/reports/coffeeContentOpportunityCard/CoffeeContentOpportunityCard";
import CoffeeDrinkerDemographicCard from "@/components/reports/coffeeDrinkerDemographicCard/CoffeeDrinkerDemographicCard";
import CommercialCoffeeShopCard from "@/components/reports/commericalCoffeeShopCard/CommercialCoffeeShopCard";
import DrinkingLocationCard from "@/components/reports/drinkingLocationCard/DrinkingLocationCard";
import FloatingUnlockAllDashboard from "@/components/reports/FloatingUnlockAllDashboard";
import PopularTasteNoteCard from "@/components/reports/popularTasteNoteCard/PopularTasteNoteCard";
import PreferredCostForWorkshopCard from "@/components/reports/preferredCostForWorkshopCard/PreferredCostForWorkshopCard";
import PreferredHomeBrewingMethodsCard from "@/components/reports/preferredHomeBrewingMethodsCard/PreferredHomeBrewingMethodsCard";
import PreferredMenuCard from "@/components/reports/preferredMenuCard/PreferredMenuCard";
import PreferredNonCoffeeDrinkOptionsCard from "@/components/reports/preferredNonCoffeeDrinkOptionsCard/PreferredNonCoffeeDrinkOptionsCard";
import RoastLevelCard from "@/components/reports/roastLevelCard/RoastLevelCard";
import SalesChannelsCard from "@/components/reports/salesChannelsCard/SalesChannelsCard";
import TopBeansByOriginCard from "@/components/reports/topBeansByOriginCard/TopBeansByOriginCard";
import UpcomingEventsCard from "@/components/reports/upcomingEventsCard/UpcomingEventsCard";
import WhatSpecialistHaveInCommonCard from "@/components/reports/whatSpecialistHaveInCommonCard/WhatSpecialistHaveInCommonCard";

const DashboardLock = () => {
  return (
    <>
      <DashboardHeader />
      <Container>
        <CoffeeBeanPurchaseFactorsCard className="col-span-12 lg:col-span-5 xl:col-span-3" />
        <PopularTasteNoteCard className="col-span-12 lg:col-span-7 xl:col-span-9" />
        <PreferredMenuCard className="col-span-12 lg:col-span-6" />
        <DrinkingLocationCard className="col-span-12 lg:col-span-6" />
        <CommercialCoffeeShopCard className="col-span-12 lg:col-span-6" />
        <SalesChannelsCard className="col-span-12 lg:col-span-6" />
        <PreferredHomeBrewingMethodsCard className="col-span-12" />
        <RoastLevelCard className="col-span-12 lg:col-span-6" />
        <TopBeansByOriginCard className="col-span-12 lg:col-span-6" />
        <WhatSpecialistHaveInCommonCard className="col-span-12 lg:col-span-9" />
        <PreferredCostForWorkshopCard className="col-span-12 lg:col-span-3" />
        <CoffeeContentOpportunityCard className="col-span-12 lg:col-span-6" />
        <UpcomingEventsCard className="col-span-12 lg:col-span-6" />
        <PreferredNonCoffeeDrinkOptionsCard className="col-span-12 lg:col-span-12" />
        <FloatingUnlockAllDashboard />
      </Container>
    </>
  );
};

export default DashboardLock;
