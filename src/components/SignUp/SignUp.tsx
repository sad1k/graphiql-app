'use client';

import { ReactNode } from 'react';

import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

import { userFormStyle } from './UserFormStyle';

const { form, buttonContainer, button, title, icon } = userFormStyle;

const SignUp = (): ReactNode => (
  <Grid container rowSpacing={2}>
    <Box component='form' sx={form}>
      <Typography variant='h3' component='h2' sx={title}>
        SignUp
      </Typography>
      <Grid item xs={12}>
        <TextField label='Name' type='text' size='small' sx={button} />
      </Grid>
      <Grid item xs={12}>
        <TextField label='Email' type='email' size='small' sx={button} />
      </Grid>
      <Grid item xs={12}>
        <TextField label='Password' type='password' size='small' sx={button} />
      </Grid>

      <Grid item xs={12} sx={buttonContainer}>
        <Button type='submit' variant='contained' sx={button}>
          sign up
        </Button>
        <Typography variant='body1' component='p' sx={title}>
          OR
        </Typography>

        <Button type='submit' variant='contained' sx={button}>
          <GoogleIcon sx={icon} />
          authorization with google
        </Button>
      </Grid>
    </Box>
  </Grid>
);

export default SignUp;
