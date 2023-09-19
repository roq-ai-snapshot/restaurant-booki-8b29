import { ReservationInterface } from 'interfaces/reservation';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface TableInterface {
  id?: string;
  table_number: number;
  capacity: number;
  availability?: boolean;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  reservation?: ReservationInterface[];
  organization?: OrganizationInterface;
  _count?: {
    reservation?: number;
  };
}

export interface TableGetQueryInterface extends GetQueryInterface {
  id?: string;
  organization_id?: string;
}
