import React from 'react';
import {Text, View} from 'react-native';

export const RecipeDetail = ({route}) => {
  const {item} = route.params;
  console.log(item);
  return (
    <View>
      <Text>{item.recipeName}</Text>
    </View>
  );
};
