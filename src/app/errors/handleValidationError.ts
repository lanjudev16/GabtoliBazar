import mongoose from 'mongoose';
import {  TGenericErrorResponse } from '../interface/error';

const handleValidationError = (
  err: mongoose.Error.ValidationError,
): TGenericErrorResponse => {


  const statusCode = 400;

  return {
    statusCode,
    message: err.message || 'Validation Error',
  };
};

export default handleValidationError;