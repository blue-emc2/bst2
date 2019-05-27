import React, { FC, useRef } from 'react';
import App from '../App';

export const useLayoutStore = (): ((layout: {}) => void) => {
  const layoutRef = useRef({});

  const store = (layout: {}) => {
    console.info('store callback layout=', layout);
    layoutRef.current = layout;
  };

  return store;
};

const AppContainer: FC = () => {
  return <App />;
};

export default AppContainer;
