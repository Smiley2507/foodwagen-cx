// src/components/FoodGrid.tsx
'use client';

import { useState } from 'react';
import FoodCard from './FoodCard';
import AddEditModal from '././AddEditModal';
import DeleteModal from '././DeleteModal';
import { useFoods } from '@/hooks/useFoods';
import { Plus } from 'lucide-react';

export default function FoodGrid() {
  const { foods, loading, addFood, updateFood, deleteFood } = useFoods();
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingFood, setEditingFood] = useState<any>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleEdit = (food: any) => {
    setEditingFood(food);
    setIsAddOpen(true);
  };

  const handleDelete = (id: string) => {
    setDeletingId(id);
  };

  const confirmDelete = async () => {
    if (deletingId) {
      await deleteFood(deletingId);
      setDeletingId(null);
    }
  };

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Meals</h2>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-2xl h-80 animate-pulse" />
            ))}
          </div>
        ) : foods.length === 0 ? (
          <div className="text-center py-20">
            <div className="empty-state-message">
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">No meals found</h3>
              <p className="text-gray-500">Be the first to add a delicious meal!</p>
            </div>
            <button
              onClick={() => setIsAddOpen(true)}
              className="mt-6 bg-yellow-500 text-white px-8 py-4 rounded-full font-bold hover:bg-yellow-600 transition flex items-center gap-2 mx-auto"
            >
              <Plus className="w-6 h-6" />
              Add Your First Meal
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {foods.map((food) => (
              <FoodCard
                key={food.id}
                food={food}
                onEdit={() => handleEdit(food)}
                onDelete={() => handleDelete(food.id)}
              />
            ))}
          </div>
        )}

        {foods.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-yellow-500 text-white px-8 py-4 rounded-full font-bold hover:bg-yellow-600 transition">
              Load more
            </button>
          </div>
        )}
      </section>

      <AddEditModal
        isOpen={isAddOpen}
        onClose={() => {
          setIsAddOpen(false);
          setEditingFood(null);
        }}
        food={editingFood}
        onSave={(data) => {
          if (editingFood) {
            updateFood(editingFood.id, data);
          } else {
            addFood(data as any);
          }
          setIsAddOpen(false);
          setEditingFood(null);
        }}
      />

      <DeleteModal
        isOpen={!!deletingId}
        onClose={() => setDeletingId(null)}
        onConfirm={confirmDelete}
      />
    </>
  );
}