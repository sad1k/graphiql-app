import { BLUE_COLOR, WHITE_COLOR } from '@/constants/colors';

const style = {
  container: {
    backgroundColor: BLUE_COLOR,
    mt: '-175px',
    pb: 10,
    '@media (min-width: 400px)': {
      mt: '-150px',
    },
    '@media (min-width: 500px)': {
      mt: '-110px',
    },
    '@media (min-width: 600px)': {
      mt: '-80px',
    },
    '@media (min-width: 700px)': {
      mt: '-40px',
    },
    '@media (min-width: 800px)': {
      mt: '-350px',
    },
  },
  title: {
    pt: '50px',
    textAlign: 'center',
    fontWeight: 500,
    color: WHITE_COLOR,
    pb: '2rem',
    '@media (min-width: 800px)': {
      pt: '350px',
    },
  },

  info__container: {
    maxWidth: '700px',
    m: 'auto',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '30px',
    color: WHITE_COLOR,
    fontWeight: 400,
    p: '0 1rem',
    '@media (min-width: 600px)': {
      flexDirection: 'row',
      columnGap: '30px',
    },
  },

  info: {
    maxWidth: '100%',
    textAlign: 'center',
    lineHeight: 1.8,
    '@media (min-width: 600px)': {
      maxWidth: '350px',
    },
  },
};

export default style;
