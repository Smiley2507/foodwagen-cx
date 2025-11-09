// src/components/AddEditModal.tsx
'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  food?: any;
  onSave: (data: any) => void;
}

export default function AddEditModal({ isOpen, onClose, food, onSave }: Props) {
  const [formData, setFormData] = useState({
    foodName: '',
    foodRating: 5,
    foodImage: '',
    price: '',
    restaurant: {
      name: '',
      logo: '',
      status: 'Open Now' as 'Open Now' | 'Closed',
    },
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (food) {
      setFormData({
        foodName: food.foodName || '',
        foodRating: food.foodRating || 5,
        foodImage: food.foodImage || '',
        price: food.price || '',
        restaurant: {
          name: food.restaurant?.name || '',
          logo: food.restaurant?.logo || '',
          status: food.restaurant?.status || 'Open Now',
        },
      });
    } else {
      setFormData({
        foodName: '',
        foodRating: 5,
        foodImage: '',
        price: '',
        restaurant: { name: '', logo: '', status: 'Open Now' },
      });
    }
    setErrors({});
  }, [food, isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.foodName.trim()) newErrors.foodName = 'Food name is required';
    if (!formData.foodImage.trim()) newErrors.foodImage = 'Food image URL is required';
    if (!formData.price.trim()) newErrors.price = 'Price is required';
    if (!formData.restaurant.name.trim()) newErrors.restaurantName = 'Restaurant name is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-screen overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-yellow-600">
            {food ? 'Edit Meal' : 'Add a meal'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Food name</label>
            <input
              id="food_name"
              name="food_name"
              type="text"
              value={formData.foodName}
              onChange={(e) => setFormData({ ...formData, foodName: e.target.value })}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
              placeholder="e.g. Bow Lasagna"
            />
            {errors.foodName && <p id="food-name-error" className="text-red-500 text-sm mt-1">{errors.foodName}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Food rating</label>
              <input
                type="number"
                min="1"
                max="5"
                step="0.1"
                value={formData.foodRating}
                onChange={(e) => setFormData({ ...formData, foodRating: parseFloat(e.target.value) || 5 })}
                className="w-full px-4 py-3 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Price</label>
              <input
                type="text"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full px-4 py-3 border rounded-lg"
                placeholder="12.99"
              />
              {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Food image (link)</label>
            <input
              type="url"
              value={formData.foodImage}
              onChange={(e) => setFormData({ ...formData, foodImage: e.target.value })}
              className="w-full px-4 py-3 border rounded-lg"
              placeholder="https://..."
            />
            {errors.foodImage && <p className="text-red-500 text-sm mt-1">{errors.foodImage}</p>}
          </div>

          <div className="border-t pt-6">
            <h3 className="font-semibold mb-4">Restaurant Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Restaurant name</label>
                <input
                  type="text"
                  value={formData.restaurant.name}
                  onChange={(e) => setFormData({
                    ...formData,
                    restaurant: { ...formData.restaurant, name: e.target.value }
                  })}
                  className="w-full px-4 py-3 border rounded-lg"
                />
                {errors.restaurantName && <p className="text-red-500 text-sm mt-1">{errors.restaurantName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Restaurant logo (link)</label>
                <input
                  type="url"
                  value={formData.restaurant.logo}
                  onChange={(e) => setFormData({
                    ...formData,
                    restaurant: { ...formData.restaurant, logo: e.target.value }
                  })}
                  className="w-full px-4 py-3 border rounded-lg"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium mb-2">Restaurant status</label>
              <select
                value={formData.restaurant.status}
                onChange={(e) => setFormData({
                  ...formData,
                  restaurant: { ...formData.restaurant, status: e.target.value as any }
                })}
                className="w-full px-4 py-3 border rounded-lg"
              >
                <option>Open Now</option>
                <option>Closed</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 p-6 border-t">
          <button
            onClick={onClose}
            className="px-8 py-3 border border-gray-300 rounded-full hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-8 py-3 bg-yellow-500 text-white rounded-full font-bold hover:bg-yellow-600"
          >
            {food ? 'Save' : 'Add'}
          </button>
        </div>
      </div>
    </div>
  );
}