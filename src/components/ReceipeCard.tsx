import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Recipe} from '../types';

export const RecipeCard = ({item}: {item: Recipe}) => {
  const onPress = () => {
    console.log(item);
    console.log(navigation);
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text style={styles.time}>{item.recipeDuration}m</Text>
      <Text style={styles.image}>{item.recipeImage}</Text>
      <Text style={styles.title}>{item.recipeName}</Text>
    </TouchableOpacity>
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
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  time: {
    alignSelf: 'flex-start',
    margin: 5,
    padding: 2,
    width: 35,
  },
  image: {
    fontSize: 30,
  },
  title: {
    fontSize: 20,
    padding: 2,
    paddingBottom: 25,
  },
});
