import * as yup from 'yup';

export const toolValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  image: yup.string(),
  availability_status: yup.string().required(),
  company_id: yup.string().nullable(),
});
