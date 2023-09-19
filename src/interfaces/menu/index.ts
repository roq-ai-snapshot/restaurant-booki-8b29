import { OrderInterface } from 'interfaces/order';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface MenuInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  availability?: boolean;
  category: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  order?: OrderInterface[];
  organization?: OrganizationInterface;
  _count?: {
    order?: number;
  };
}

export interface MenuGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  category?: string;
  organization_id?: string;
}
