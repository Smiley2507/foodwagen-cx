// src/hooks/useFoods.ts
import { useState, useEffect } from 'react';
import { foodApi } from '@/lib/api';
import type { Food } from '@/lib/types';

export function useFoods() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchFoods = async (query = '') => {
    setLoading(true);
    try {
      const data = query ? await foodApi.search(query) : await foodApi.getAll();
      setFoods(data);
    } catch (error) {
      console.error('Failed to fetch foods:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  const search = (query: string) => {
    setSearchQuery(query);
    const timer = setTimeout(() => fetchFoods(query), 500);
    return () => clearTimeout(timer);
  };

  const addFood = async (food: Omit<Food, 'id'>) => {
    const newFood = await foodApi.create(food);
    setFoods(prev => [...prev, newFood]);
  };

  const updateFood = async (id: string, updates: Partial<Food>) => {
    const updated = await foodApi.update(id, updates);
    setFoods(prev => prev.map(f => f.id === id ? updated : f));
  };

  const deleteFood = async (id: string) => {
    await foodApi.delete(id);
    setFoods(prev => prev.filter(f => f.id !== id));
  };

  return {
    foods,
    loading,
    searchQuery,
    search,
    addFood,
    updateFood,
    deleteFood,
    refetch: () => fetchFoods(searchQuery),
  };
}