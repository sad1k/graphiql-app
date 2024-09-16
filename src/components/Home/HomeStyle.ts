import { BLUE_COLOR } from '@/constants/colors';

const style = {
  linkContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '1rem',
    alignItems: 'center',
    fontSize: '1.3rem',
    m: '2rem 0',
    '@media (min-width: 480px)': {
      fontSize: '1.3rem',
      rowGap: '1rem',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      columnGap: '1rem',
    },
  },
  title: {
    textAlign: 'center',
    mt: 5,
    color: BLUE_COLOR,
    fontWeight: 'bold',
    fontStyle: 'Italic',
    fontSize: '2rem',
    '@media (min-width: 670px)': { fontSize: '3.75rem' },
    lineHeight: '3rem',
  },
};

export default style;
