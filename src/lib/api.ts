// src/lib/api.ts
import axios from 'axios';
import type { Food } from './types';

const API_BASE = 'https://6852821e0594059b23cdd834.mockapi.io';

export const api = {
  getFoods: () => axios.get<Food[]>(`${API_BASE}/Food`),
  getFoodById: (id: string) => axios.get<Food>(`${API_BASE}/Food/${id}`),
  createFood: (data: Partial<Food>) => axios.post<Food>(`${API_BASE}/Food`, data),
  updateFood: (id: string, data: Partial<Food>) => axios.put<Food>(`${API_BASE}/Food/${id}`, data),
  deleteFood: (id: string) => axios.delete(`${API_BASE}/Food/${id}`),
  searchFoods: (query: string) => axios.get<Food[]>(`${API_BASE}/Food?name=${query}`),
};