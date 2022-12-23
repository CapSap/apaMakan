import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Recipe} from '../types';

export const RecipeCard = ({item}: {item: Recipe}) => {
  return (
    <View style={styles.card}>
      <Text>{item.recipeName}</Text>
      <Text>est</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'teal',
    height: 50,
    width: 50,
    border: 1,
  },
});
