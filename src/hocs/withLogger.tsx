import { ComponentType, useEffect } from 'react';

const withLogger =
  <P extends object>(Component: ComponentType<P>) =>
  (props: P) => {
    useEffect(() => {
      console.log(`Component ${Component.name} is updated.`);
    });

    return <Component {...props} />;
  };

export default withLogger;
