const style = {
  container: {
    maxWidth: '1200px',
    m: '5rem auto 0',
    '@media (min-width: 800px)': {
      m: '5rem auto',
    },
  },

  image: {
    backgroundImage: `url('./work.jpg')`,
    width: '100%',
    minHeight: '550px',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  },
};

export default style;
