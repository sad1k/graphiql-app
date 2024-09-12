import { TResponseStatus } from '@/types/response-status';
import { HttpStatusCodes } from './http-status';

const getResponseStatus = (code: number): TResponseStatus => {
  if (code >= HttpStatusCodes.SERVER_ERROR) return 'server error';
  if (code >= HttpStatusCodes.CLIENT_ERROR) return 'client error';
  if (code >= HttpStatusCodes.REDIRECT) return 'redirect';
  if (code >= HttpStatusCodes.SUCCESS) return 'success';

  return 'information';
};

export default getResponseStatus;
