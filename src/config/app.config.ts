interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: [
    'Owner',
    'Chef',
    'Waiter',
    'Customer',
    'Wait Staff',
    'Restaurant Manager',
    'Restaurant Owner',
    'Back Office',
  ],
  tenantName: 'Organization',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read menus.', 'Read restaurant information.', 'Book a table.', 'Give feedback.'],
  ownerAbilities: [
    'Manage ingredient inventory',
    'Manage payment history',
    'Manage special offers',
    'Manage customer feedback',
    'Manage employees',
    'Manage menu items',
    'Manage users',
    'Manage organizations',
    'Manage menus',
    'Manage tables',
    'Manage reservations',
    'Manage orders',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/75f5247d-eff4-462d-8849-937fcaef8dc6',
};
