import { lime, yellow, blue, red } from '@mui/material/colors';

export const HttpStatusCodes = {
  SERVER_ERROR: 500,
  CLIENT_ERROR: 400,
  REDIRECT: 300,
  SUCCESS: 200,
};

export const HttpStatusColors = {
  SERVER_ERROR: red.A700,
  CLIENT_ERROR: red.A700,
  REDIRECT: blue['800'],
  SUCCESS: lime['800'],
  INFORMATION: yellow['500'],
};
