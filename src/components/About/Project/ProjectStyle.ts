import { PINK_COLOR, WHITE_COLOR } from '@/constants/colors';

const style = {
  container: {
    backgroundColor: PINK_COLOR,
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
};

export default style;
