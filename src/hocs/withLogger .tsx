import { ComponentType, useEffect } from 'react';

// eslint-disable-next-line
const withLogger = (Component: ComponentType<any>) => (props: object) => {
  useEffect(() => {
    console.log(`Component ${Component.name} is updated.`);
  });

  return <Component {...props} />;
};

export default withLogger;
