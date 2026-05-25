export type AddOn = {
  id: string;
  label: string;
  price: number;
  description: string;
};

export const addOns: AddOn[] = [
  {
    id: "headlight",
    label: "Headlight Restoration",
    price: 60,
    description: "Restore clarity to hazy/yellowed headlights for safer night driving.",
  },
  {
    id: "ozone",
    label: "Ozone Odor Removal",
    price: 80,
    description: "Eliminate smoke, pet, and lingering odors at the source.",
  },
  {
    id: "engine-bay",
    label: "Engine Bay Detailing",
    price: 80,
    description: "Safe degrease, steam clean, and dressing for a showroom-fresh engine bay.",
  },
];

export function formatPrice(n: number): string {
  return `$${n}`;
}

export function getAddOnById(id: string): AddOn | undefined {
  return addOns.find((a) => a.id === id);
}
