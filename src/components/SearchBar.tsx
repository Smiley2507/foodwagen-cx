// src/components/SearchBar.tsx
'use client';

import { useState } from 'react';
import { useFoods } from '@/hooks/useFoods';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const { search } = useFoods();
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    search(value);
  };

  return (
    <div className="bg-yellow-400 py-16 -mt-1">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Are you starving?</h1>
        <p className="text-white text-lg mb-8">Within a few clicks, find meals that are accessible near you</p>

        <div className="bg-white rounded-full shadow-2xl p-3 flex items-center max-w-2xl mx-auto">
          <div className="flex items-center gap-3 flex-1 px-6">
            <Search className="w-6 h-6 text-gray-400" />
            <input
              type="text"
              name="food_search"
              placeholder="Q. What do you like to eat today?"
              value={query}
              onChange={handleSearch}
              className="w-full outline-none text-gray-700 text-lg"
              aria-label="Search for food"
            />
          </div>
          <button className="bg-red-500 text-white px-8 py-4 rounded-full font-bold hover:bg-red-600 transition">
            Find Meal
          </button>
        </div>
      </div>
    </div>
  );
}