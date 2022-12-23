import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {Recipe} from '../types';
import {RecipeCard} from './ReceipeCard';
import {useAppContext} from '../App.provider';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RecipeDetail} from './RecipeDetail';

export const HomeScreen = () => {
  //get dummyData from useContext()
  const recipeData: Recipe[] = useAppContext().appState;

  const Tab = createNativeStackNavigator();

  const List = () => {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.list}
          data={recipeData}
          renderItem={RecipeCard}
          keyExtractor={(item, index) => item.recipeName + item.id + index}
          numColumns={2}
        />
      </View>
    );
  };

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={List} />
      <Tab.Screen name="Detail" component={RecipeDetail} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  list: {
    alignContent: 'space-around',
  },
});
