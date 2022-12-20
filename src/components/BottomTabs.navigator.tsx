import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './HomeScreen';
import {RecipeScreen} from './RecipeScreen';
import {dummyData} from '../dummyData';
import {Recipe} from '../types';

//Initialise our recipeData
const recipeData: Recipe[] = dummyData;

//Define
type TabsParamList = {
  Home: {recipeData: Recipe[]};
  RecipeScreen: undefined; //undefined => no params
};

const BottomTabs = createBottomTabNavigator<TabsParamList>();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{recipeData: recipeData}}
      />
      <BottomTabs.Screen name="RecipeScreen" component={RecipeScreen} />
    </BottomTabs.Navigator>
  );
};
