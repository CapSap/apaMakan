import React from 'react';
import {dummyData} from './dummyData';
import {Recipe} from './types';

type AppContextType = {
  appState: Recipe[];
  setAppState?: (x: Recipe[]) => void;
};

const initialAppState = {appState: dummyData};

const AppContext = React.createContext<AppContextType>(initialAppState);

//Create a context provider
export const AppProvider: React.FC = ({children}) => {
  //store dummyData in state
  const [recipesState, setRecipesState] = React.useState<Recipe[]>(dummyData);

  return (
    <AppContext.Provider
      value={{appState: recipesState, setAppState: setRecipesState}}>
      {children}
    </AppContext.Provider>
  );
};

//useAppContext can be used to access AppContext in all components wrapped inside of ContextProvider
export const useAppContext = () => React.useContext(AppContext);
