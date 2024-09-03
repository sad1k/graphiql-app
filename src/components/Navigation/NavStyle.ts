const navStyle = {
  container: {
    display: { xs: 'none', sm: 'flex' },
    columnGap: 2,
    alignItems: 'center',
    '@media (min-width: 600px)': { paddingRight: 0, paddingLeft: 0 },
  },
  toogleButton: {
    color: 'white',
    borderColor: 'white',
    border: 'none',
    '&:hover': {
      color: 'red',
    },
  },
  hr: { mr: 1, display: { xs: 'none', sm: 'block' } },
  burger: {
    display: { xs: 'block', sm: 'none' },
    ml: 2,
    '&:hover': {
      '& .MuiSvgIcon-root': {
        color: 'red',
      },
    },
  },
  driverContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 3,
    mt: 2,
    color: 'white',
  },
  drawer: { width: '60vw', padding: '20px 0', backgroundColor: '#1976d2;' },
  signOut: {
    textTransform: 'capitalize',
    color: 'white',
    '&:hover': {
      color: 'red',
    },
  },
};

export default navStyle;
