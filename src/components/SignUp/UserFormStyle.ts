export const userFormStyle = {
  container: {
    p: '0 1rem',
    m: 'auto',
    width: '100%',
    '@media (min-width:600px)': { width: '500px' },
  },
  form: {
    width: '100%',
    m: 'auto',
    display: 'flex',
    flexDirection: 'column',
    rowGap: 2,
    mt: 5,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 1,
  },
  button: {
    width: '100%',
    textTransform: 'capitalize',
  },
  title: {
    textAlign: 'center',
  },
  icon: { pr: 1 },
};
