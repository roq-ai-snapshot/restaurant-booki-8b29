import axios from 'axios';
import queryString from 'query-string';
import { SpecialOffersInterface, SpecialOffersGetQueryInterface } from 'interfaces/special-offers';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSpecialOffers = async (
  query?: SpecialOffersGetQueryInterface,
): Promise<PaginatedInterface<SpecialOffersInterface>> => {
  const response = await axios.get('/api/special-offers', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSpecialOffers = async (specialOffers: SpecialOffersInterface) => {
  const response = await axios.post('/api/special-offers', specialOffers);
  return response.data;
};

export const updateSpecialOffersById = async (id: string, specialOffers: SpecialOffersInterface) => {
  const response = await axios.put(`/api/special-offers/${id}`, specialOffers);
  return response.data;
};

export const getSpecialOffersById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/special-offers/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSpecialOffersById = async (id: string) => {
  const response = await axios.delete(`/api/special-offers/${id}`);
  return response.data;
};
