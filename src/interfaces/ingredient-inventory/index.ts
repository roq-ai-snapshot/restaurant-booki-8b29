import { GetQueryInterface } from 'interfaces';

export interface IngredientInventoryInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface IngredientInventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
}
