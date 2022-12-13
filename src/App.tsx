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
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

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

import { HomeScreen } from './components/HomeScreen';
import { RecipeScreen } from './components/RecipeScreen';

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

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />   
        <Stack.Screen name="RecipeScreen" component={RecipeScreen} options={({ route }) => ({})} /> 
      </Stack.Navigator>
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
