import { HttpStatusCodes, HttpStatusColors } from './http-status';

const getResponseColor = (code: number) => {
  if (code >= HttpStatusCodes.SERVER_ERROR)
    return HttpStatusColors.SERVER_ERROR;
  if (code >= HttpStatusCodes.CLIENT_ERROR)
    return HttpStatusColors.CLIENT_ERROR;
  if (code >= HttpStatusCodes.REDIRECT) return HttpStatusColors.REDIRECT;
  if (code >= HttpStatusCodes.SUCCESS) return HttpStatusColors.SUCCESS;

  return HttpStatusColors.INFORMATION;
};

export default getResponseColor;
