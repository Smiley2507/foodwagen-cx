// src/components/Header.tsx
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-yellow-400 text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-full p-2">
            <span className="text-2xl">FoodWagen</span>
          </div>
          <h1 className="text-4xl font-bold">FoodWagen</h1>
        </div>
        <button className="bg-white text-yellow-600 px-6 py-3 rounded-full font-semibold hover:bg-yellow-50 transition">
          Add Meal
        </button>
      </div>
    </header>
  );
}