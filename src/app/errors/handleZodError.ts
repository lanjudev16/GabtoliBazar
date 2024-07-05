import { ZodError } from 'zod';
import { TGenericErrorResponse } from '../interface/error';

const handleZodError = (err: ZodError): TGenericErrorResponse => {
  const statusCode = 400;
  return {
    statusCode,
    message: err.message || 'Validation Error',
  };
};

export default handleZodError;