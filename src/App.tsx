/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {HomeScreen} from './components/HomeScreen';
import {RecipeScreen} from './components/RecipeScreen';
import {BottomTabsNavigator} from './components/BottomTabs.navigator';
import {dummyData} from './dummyData';

interface Recipes {
  recipes: Recipe[];
}

interface Recipe {
  id: number;
  recipeName: string;
  recipeDescription: string;
  recipeImage: string;
  recipeDuration: number;
  ingredients: Ingredient[];
  steps: string[];
}

interface Ingredient {
  ingredientName: string;
  qty: number;
}

const recipeData: Recipe[] = dummyData;

function getRecipeByName(recipes: Recipe[], name: string): Recipe | undefined {
  return recipes.find(item => item.recipeName === name);
}

const instantNoodles = getRecipeByName(recipeData, 'instant noodles');
const mash = getRecipeByName(recipeData, 'mash potatoes');

const App = () => {
  return (
    <NavigationContainer>
      <Text>{JSON.stringify(mash, null, 4)}</Text>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
