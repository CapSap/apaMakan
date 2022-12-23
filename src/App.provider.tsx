import React from 'react';
import {dummyData} from './dummyData';

type AppContextType = {
  msg: string;
};

const defaultValue = {msg: 'initialMsgValue'};

const AppContext = React.createContext<AppContextType>(defaultValue);

export const AppProvider: React.FC = ({children}) => {
  return (
    <AppContext.Provider value={{msg: 'newMsgValue'}}>
      {children}
    </AppContext.Provider>
  );
};
