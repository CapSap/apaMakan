import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './HomeScreen';
import {RecipeScreen} from './RecipeScreen';
import {SearchScreen} from './SearchScreen';
import {ProfileScreen} from './ProfileScreen';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Home" component={HomeScreen} />
      <BottomTabs.Screen name="Search" component={SearchScreen} />
      <BottomTabs.Screen name="Random" component={RecipeScreen} />
      <BottomTabs.Screen name="Profile" component={ProfileScreen} />
    </BottomTabs.Navigator>
  );
};
