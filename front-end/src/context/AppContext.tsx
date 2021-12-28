import { createContext } from 'react';

export const DEFAULT_STATE = {};

const AppContext = createContext<IAppContext>(DEFAULT_STATE);

export default AppContext;
