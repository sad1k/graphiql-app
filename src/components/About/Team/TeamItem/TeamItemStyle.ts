import { BLUE_COLOR, PINK_COLOR, WHITE_COLOR } from '@/constants/colors';

const flexCenter = { display: 'flex', alignItems: 'center' };

const even = 2;

export const backgroundColor = (position: number) =>
  position % even === 0 ? WHITE_COLOR : PINK_COLOR;

export const color = (position: number) =>
  position % even === 0 ? BLUE_COLOR : WHITE_COLOR;

export const direction = (position: number) =>
  position % even === 0 ? 'row' : 'row-reverse';

export const alignSelf = (position: number) =>
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
    maxWidth: '1200px',
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
  bio: (position: number) => ({
    textAlign: 'center',
    letterSpacing: '0.05rem',
    lineHeight: 1.5,
    color: color(position),
  }),
  icon: (position: number) => ({
    color: color(position),
  }),
};

export default style;
