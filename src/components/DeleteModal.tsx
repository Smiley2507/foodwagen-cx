// src/components/DeleteModal.tsx
'use client';

import { X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteModal({ isOpen, onClose, onConfirm }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold text-red-600">Delete Meal</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-6 h-6" />
          </button>
        </div>
        <p className="text-gray-600 mb-8">
          Are you sure you want to delete this meal? Actions cannot be reversed.
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-8 py-3 border border-gray-300 rounded-full hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-8 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-700"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}