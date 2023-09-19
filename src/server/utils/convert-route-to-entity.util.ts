const mapping: Record<string, string> = {
  'customer-feedbacks': 'customer_feedback',
  employees: 'employee',
  'ingredient-inventories': 'ingredient_inventory',
  menus: 'menu',
  'menu-items': 'menu_item',
  orders: 'order',
  organizations: 'organization',
  'payment-histories': 'payment_history',
  reservations: 'reservation',
  'special-offers': 'special_offers',
  tables: 'table',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
