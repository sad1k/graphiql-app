import { BLUE_COLOR, PINK_COLOR, WHITE_COLOR } from '@/constants/colors';

const navStyle = {
  container: {
    display: { xs: 'none', sm: 'flex' },
    columnGap: 2,
    alignItems: 'center',
    '@media (min-width: 600px)': { paddingRight: 0, paddingLeft: 0 },
  },
  button: {
    color: PINK_COLOR,
    fontWeight: 600,
    border: 'none',
    p: 0,
    '&:hover': {
      backgroundColor: 'transparent',
      color: WHITE_COLOR,
    },
  },

  signOutButton: {
    color: WHITE_COLOR,
    fontWeight: 600,
    border: `2px solid ${WHITE_COLOR}`,
    borderRadius: 0,
    p: 0.5,
    '&:hover': {
      color: PINK_COLOR,
      border: `2px solid ${PINK_COLOR}`,
    },
  },
  hr: {
    mr: 1,
    display: { xs: 'none', sm: 'block', color: PINK_COLOR },
  },
  burger: {
    display: { xs: 'block', sm: 'none' },
    ml: 2,
    '& .MuiSvgIcon-root': {
      color: PINK_COLOR,
    },
    '&:hover': {
      '& .MuiSvgIcon-root': {
        color: WHITE_COLOR,
      },
    },
  },
  driverContainer: {
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'center',
    rowGap: 2,
    mt: 2,
  },

  linkContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 2,
    '@media (min-width: 600px)': { flexDirection: 'row', columnGap: 2 },
  },

  drawer: { width: '60vw', padding: '20px 0', backgroundColor: BLUE_COLOR },
};

export default navStyle;
