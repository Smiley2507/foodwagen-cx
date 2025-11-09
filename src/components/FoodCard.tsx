// src/components/FoodCard.tsx
import Image from 'next/image';
import { Food } from '@/lib/types';
import { Edit2, Trash2 } from 'lucide-react';

interface Props {
  food: Food;
  onEdit: () => void;
  onDelete: () => void;
}

export default function FoodCard({ food, onEdit, onDelete }: Props) {
  const status = food.restaurant?.status || "Closed";
  const isOpen = status === "Open Now";

  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-in slide-in-from-bottom-4">
      <div className="relative">
        <Image
          src={food.foodImage}
          alt={food.foodName}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
          ${food.price}
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="food-name text-lg font-semibold">{food.foodName}</h3>
          <div className="flex gap-2">
            <button onClick={onEdit} className="p-2 hover:bg-gray-100 rounded-lg">
              <Edit2 className="w-4 h-4" />
            </button>
            <button onClick={onDelete} className="p-2 hover:bg-red-50 rounded-lg text-red-600">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <span className="text-yellow-500">★★★★☆</span>
          <span className="food-rating">{food.foodRating}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {food.restaurant?.logo && (
              <Image
                src={food.restaurant.logo}
                alt={food.restaurant.name}
                width={40}
                height={40}
                className="restaurant-logo rounded-full"
              />
            )}
            <div>
              <p className="restaurant-name text-sm font-medium">
                {food.restaurant?.name || "Unknown Restaurant"}
              </p>
              <p className={`restaurant-status text-xs font-medium ${isOpen ? 'text-green-600' : 'text-red-600'}`}>
                {isOpen ? "Open Now" : "Closed"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}