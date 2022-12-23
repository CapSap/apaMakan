import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './HomeScreen';
import {RecipeScreen} from './RecipeScreen';
import {ModifyRecipeScreen} from './ModifyRecipeScreen';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="HomeScreen" component={HomeScreen} />
      <BottomTabs.Screen name="RecipeScreen" component={RecipeScreen} />
      <BottomTabs.Screen name="ModifyRecipe" component={ModifyRecipeScreen} />
    </BottomTabs.Navigator>
  );
};
