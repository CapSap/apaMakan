import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './HomeScreen';
import {RandomScreen} from './RandomScreen';
import {ModifyRecipeScreen} from './ModifyRecipeScreen';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="HomeScreen" component={HomeScreen} />
      <BottomTabs.Screen name="RandomScreen" component={RandomScreen} />
      <BottomTabs.Screen name="ModifyRecipe" component={ModifyRecipeScreen} />
    </BottomTabs.Navigator>
  );
};
