import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Recipe} from '../types';

export const RecipeCard = ({item}: {item: Recipe}) => {
  return (
    <View style={styles.card}>
      <Text>{item.recipeName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'teal',
    height: 150,
    width: 150,
    border: 1,
    margin: 10,
    borderRadius: 10,
    fontSize: 20,
    alignContent: 'center',
  },
});
