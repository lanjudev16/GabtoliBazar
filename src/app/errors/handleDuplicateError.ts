
/* eslint-disable @typescript-eslint/no-explicit-any */
import {  TGenericErrorResponse } from '../interface/error';

const handleDuplicateError = (err: any): TGenericErrorResponse => {

  const statusCode = 400;

  return {
    statusCode,
    message: err.message || 'Invalid ID',
  };
};

export default handleDuplicateError;
