import { BLUE_COLOR, PINK_COLOR, WHITE_COLOR } from '@/constants/colors';

const flexCenter = { display: 'flex', alignItems: 'center' };

const even = 2;

const backgroundColor = (position: number) =>
  position % even === 0 ? WHITE_COLOR : BLUE_COLOR;

const color = (position: number) =>
  position % even === 0 ? BLUE_COLOR : WHITE_COLOR;

const direction = (position: number) =>
  position % even === 0 ? 'row' : 'row-reverse';

const alignSelf = (position: number) =>
  position % even === 0 ? 'baseline' : 'end';

const style = {
  item: (position: number) => ({
    color: color(position),
    backgroundColor: backgroundColor(position),
  }),
  container: {
    ...flexCenter,
    flexDirection: 'column',
    p: '5rem 1rem',
    margin: 'auto',
  },
  wrapper: (position: number) => ({
    maxWidth: '40rem',
    ...flexCenter,
    alignSelf: alignSelf(position),
    flexDirection: 'column',
    columnGap: 2,
    '@media (min-width: 600px)': {
      flexDirection: direction(position),
    },
  }),
  img__container: {
    width: '15rem',
    height: '15rem',
    mb: 1,
    borderRadius: '50%',
    overflow: 'hidden',
  },

  about__cotainer: (position: number) => ({
    ...flexCenter,
    flexDirection: 'column',
    color: color(position),
  }),
  role: flexCenter,
  bio: {
    textAlign: 'center',
    letterSpacing: '0.05rem',
    lineHeight: 1.5,
    color: PINK_COLOR,
  },
  icon: (position: number) => ({
    color: color(position),
  }),
};

export default style;
