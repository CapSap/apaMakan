import React from 'react';
import {dummyData} from './dummyData';
import {Recipe} from './types';

type AppContextType = {
  data: Recipe[];
};

const initialRecipes = {data: dummyData};

const AppContext = React.createContext<AppContextType>(initialRecipes);

//Create a context provider
export const AppProvider: React.FC = ({children}) => {
  //store dummyData in state
  const [recipesState, setRecipesState] = React.useState<Recipe[]>(dummyData);

  return (
    <AppContext.Provider value={{data: recipesState}}>
      {children}
    </AppContext.Provider>
  );
};

//useAppContext can be used to access AppContext in all components wrapped inside of ContextProvider
export const useAppContext = () => React.useContext(AppContext);
