export const FormContainerStyle = {
  container: {
    p: '0 1rem',
    m: 'auto',
    width: '100%',
    '@media (min-width:600px)': { width: '400px' },
    mt: 3,
  },
  title: {
    textAlign: 'center',
    textTransform: 'capitalize',
  },

  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '3rem',
    justifyContent: 'center',
    flexDirection: 'column',
    rowGap: 2,
    '@media (min-width: 500px)': {
      flexDirection: 'row',
      columnGap: 2,
    },
  },
};
