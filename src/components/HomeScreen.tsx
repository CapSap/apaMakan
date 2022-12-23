import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';
import {HomeProps} from './BottomTabs.navigator';
import {Recipe} from '../types';
import {RecipeCard} from './ReceipeCard';

import {useAppContext} from '../App.provider';

export const HomeScreen = () => {
  //get dummyData from useContext()
  const recipeData: Recipe[] = useAppContext().appState;

  return (
    <FlatList
      style={styles.container}
      data={recipeData}
      renderItem={RecipeCard}
      keyExtractor={item => item.recipeName + item.id}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    alignContent: 'center',
  },
});

