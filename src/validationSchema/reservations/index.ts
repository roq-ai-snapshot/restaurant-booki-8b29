import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  reservation_date: yup.date().required(),
  reservation_time: yup.date().required(),
  number_of_people: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  table_id: yup.string().nullable().required(),
});
