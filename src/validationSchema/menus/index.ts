import * as yup from 'yup';

export const menuValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  price: yup.number().integer().required(),
  availability: yup.boolean().required(),
  category: yup.string().required(),
  organization_id: yup.string().nullable().required(),
});
