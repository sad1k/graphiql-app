import { HEADER, HEADER_ACTIVE } from '@/constants/colors';

export const headerStyle = {
  container: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    p: '.5rem 2rem',
    transition: 'all 0.5s ease-in-out',
    background: HEADER,
  },
  header: {
    position: 'sticky',
    '& .MuiToolbar-root': { padding: 0 },
  },
  active: {
    p: '0.3rem 1rem',
    background: HEADER_ACTIVE,
  },
};
