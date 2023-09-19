import axios from 'axios';
import queryString from 'query-string';
import { IngredientInventoryInterface, IngredientInventoryGetQueryInterface } from 'interfaces/ingredient-inventory';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getIngredientInventories = async (
  query?: IngredientInventoryGetQueryInterface,
): Promise<PaginatedInterface<IngredientInventoryInterface>> => {
  const response = await axios.get('/api/ingredient-inventories', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createIngredientInventory = async (ingredientInventory: IngredientInventoryInterface) => {
  const response = await axios.post('/api/ingredient-inventories', ingredientInventory);
  return response.data;
};

export const updateIngredientInventoryById = async (id: string, ingredientInventory: IngredientInventoryInterface) => {
  const response = await axios.put(`/api/ingredient-inventories/${id}`, ingredientInventory);
  return response.data;
};

export const getIngredientInventoryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/ingredient-inventories/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deleteIngredientInventoryById = async (id: string) => {
  const response = await axios.delete(`/api/ingredient-inventories/${id}`);
  return response.data;
};
