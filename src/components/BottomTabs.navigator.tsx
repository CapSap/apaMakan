import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './HomeScreen';
import {RecipeScreen} from './RecipeScreen';
import {dummyData} from '../dummyData';
import {Recipe} from '../types';

import type {
  BottomTabScreenProps,
  //BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';

//Define types for each route
//undefined => no params
//Have to use 'type' alias instead of interface according to the docs
type TabsParamList = {
  RecipeScreen: {data: Recipe[]};
  Home: {data: Recipe[]};
};

//HomeScreen
export type HomeProps = BottomTabScreenProps<TabsParamList, 'Home'>;

const BottomTabs = createBottomTabNavigator<TabsParamList>();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{data: dummyData}}
      />
      <BottomTabs.Screen
        name="RecipeScreen"
        component={RecipeScreen}
        initialParams={{data: dummyData}}
      />
    </BottomTabs.Navigator>
  );
};
