import { BLUE_COLOR } from '@/constants/colors';

export const headerStyle = {
  container: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    p: '.5rem 2rem',
  },
  header: { backgroundColor: BLUE_COLOR, '& .MuiToolbar-root': { padding: 0 } },
};
