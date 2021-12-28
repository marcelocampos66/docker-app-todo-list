import React, { useState } from 'react';
import AppContext from './AppContext';
// import { DEFAULT_STATE } from './AppContext';

const Provider: React.FC = ({ children }) => {
  const contextValue = {};

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  )
}

export default Provider;
