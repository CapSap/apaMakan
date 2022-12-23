import React from 'react';
import {dummyData} from './dummyData';

type AppContextType = {
  msg: string;
};

const defaultValue = {msg: ''};

const AppContext = React.createContext<AppContextType>(defaultValue);

//Create a context provider
export const AppProvider: React.FC = ({children}) => {
  return (
    <AppContext.Provider value={{msg: 'newMsgValue'}}>
      {children}
    </AppContext.Provider>
  );
};
