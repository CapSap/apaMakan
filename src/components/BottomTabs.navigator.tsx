import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './HomeScreen';
import {RecipeScreen} from './RecipeScreen';
import {dummyData} from '../dummyData';
import {Recipe} from '../types';
import {LogBox, Text, View} from 'react-native';

//ignore warning to not pass non-serializable data through params: this is safe unless we implement deep linking or state persistence
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import type {
  BottomTabScreenProps,
  //BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';

//Create a dummy function to see if can pass it through route.params
export type TestHook = (s: number) => void;

//Define types for each route
//undefined => no params
//Have to use 'type' alias instead of interface according to the docs
type TabsParamList = {
  RecipeScreen: {data: Recipe[]};
  Home: {container: {data: Recipe[]; test: TestHook; hookResult: number}};
};

//HomeScreen
export type HomeProps = BottomTabScreenProps<TabsParamList, 'Home'>;

const BottomTabs = createBottomTabNavigator<TabsParamList>();

export const BottomTabsNavigator = () => {
  const [testHook, setTestHook] = useState<number>(0);
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{data: dummyData}}
      />
      <BottomTabs.Screen
        name={'RecipeScreen' + testHook}
        component={RecipeScreen}
        //initialParams={{data: dummyData}}
        initialParams={{
          container: {data: dummyData, test: setTestHook, hookResult: testHook},
        }}
      />
    </BottomTabs.Navigator>
  );
};
