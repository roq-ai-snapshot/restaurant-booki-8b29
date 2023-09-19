import { UserInterface } from 'interfaces/user';
import { MenuInterface } from 'interfaces/menu';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  user_id: string;
  menu_id: string;
  quantity: number;
  total_price: number;
  order_status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  menu?: MenuInterface;
  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  menu_id?: string;
  order_status?: string;
}
