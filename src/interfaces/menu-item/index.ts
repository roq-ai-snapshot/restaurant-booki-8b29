import { GetQueryInterface } from 'interfaces';

export interface MenuItemInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface MenuItemGetQueryInterface extends GetQueryInterface {
  id?: string;
}
