import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './HomeScreen';
import {RecipeScreen} from './RecipeScreen';
import {dummyData} from '../dummyData';
import {Recipe} from '../types';
import {LogBox} from 'react-native';

//ignore warning to not pass non-serializable data through params: this is safe unless we implement deep linking or state persistence
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import type {
  BottomTabScreenProps,
  //BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';

//Create a dummy function to see if can pass it through route.params
type TestFuncType = () => string;
const testFunction: TestFuncType = () => {
  return 'hello';
};

//Define types for each route
//undefined => no params
//Have to use 'type' alias instead of interface according to the docs
type TabsParamList = {
  RecipeScreen: {container: {data: Recipe[]; test: TestFuncType}};
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
        //initialParams={{container: {data: dummyData, test: testFunction}}}
      />
    </BottomTabs.Navigator>
  );
};
