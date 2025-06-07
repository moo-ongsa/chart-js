export const coffeeEquipments = [
  "pour_over",
  "espresso",
  "aeropress",
  "fresh_pressed",
  "cold_brew",
  "drip_bag_coffee",
  "instant_coffee",
  "capsule_coffee",
  "leave_it_to_barista",
] as const;

export type CoffeeEquipment = (typeof coffeeEquipments)[number];
