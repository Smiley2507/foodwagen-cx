// src/lib/types.ts
export type RestaurantStatus = "Open Now" | "Closed";

export interface Food {
  id: string;
  foodName: string;
  foodRating: number;
  foodImage: string;
  price: string;
  restaurant?: {
    name: string;
    logo: string;
    status: RestaurantStatus;
  };
}