import { WHITE_COLOR } from '@/constants/colors';

const style = {
  container: {
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

  text: {
    maxWidth: '100%',
    textAlign: 'center',
    lineHeight: 1.8,
    '@media (min-width: 600px)': {
      maxWidth: '350px',
    },
  },
};

export default style;
