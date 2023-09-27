import * as yup from 'yup';

export const jobValidationSchema = yup.object().shape({
  company_id: yup.string().nullable(),
});
