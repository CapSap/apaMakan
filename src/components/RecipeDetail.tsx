import React from 'react';
import {Text, View} from 'react-native';
import {DetailProps} from '../types';

export const RecipeDetail = ({route}: DetailProps) => {
  const {item} = route.params;
  console.log(item);
  return (
    <View>
      <Text>{item.recipeName}</Text>
    </View>
  );
};
