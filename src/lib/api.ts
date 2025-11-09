// src/lib/api.ts
import axios from 'axios';
import type { Food } from './types';

const BASE_URL = 'https://6852821e0594059b23cdd834.mockapi.io';

export const foodApi = {
  getAll: async (): Promise<Food[]> => {
    const res = await axios.get(`${BASE_URL}/Food`);
    return res.data;
  },

  search: async (query: string): Promise<Food[]> => {
    const res = await axios.get(`${BASE_URL}/Food?name=${encodeURIComponent(query)}`);
    return res.data;
  },

  create: async (data: Omit<Food, 'id'>): Promise<Food> => {
    const res = await axios.post(`${BASE_URL}/Food`, data);
    return res.data;
  },

  update: async (id: string, data: Partial<Food>): Promise<Food> => {
    const res = await axios.put(`${BASE_URL}/Food/${id}`, data);
    return res.data;
  },

  delete: async (id: string): Promise<void> => {
    await axios.delete(`${BASE_URL}/Food/${id}`);
  },
};