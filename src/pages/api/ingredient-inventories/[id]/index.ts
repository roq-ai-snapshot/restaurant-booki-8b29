import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware, notificationHandlerMiddleware } from 'server/middlewares';
import { ingredientInventoryValidationSchema } from 'validationSchema/ingredient-inventories';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  const allowed = await prisma.ingredient_inventory
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  if (!allowed) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  switch (req.method) {
    case 'GET':
      return getIngredientInventoryById();
    case 'PUT':
      return updateIngredientInventoryById();
    case 'DELETE':
      return deleteIngredientInventoryById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getIngredientInventoryById() {
    const data = await prisma.ingredient_inventory.findFirst(
      convertQueryToPrismaUtil(req.query, 'ingredient_inventory'),
    );
    return res.status(200).json(data);
  }

  async function updateIngredientInventoryById() {
    await ingredientInventoryValidationSchema.validate(req.body);
    const data = await prisma.ingredient_inventory.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    await notificationHandlerMiddleware(req, data.id);
    return res.status(200).json(data);
  }
  async function deleteIngredientInventoryById() {
    await notificationHandlerMiddleware(req, req.query.id as string);
    const data = await prisma.ingredient_inventory.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
