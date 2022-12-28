import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {DetailProps} from '../types';

export const RecipeDetail = ({route}: DetailProps) => {
  const {recipe} = route.params;
  console.log(recipe);
  return (
    <View>
      <Text>{recipe.recipeName}</Text>
      <Text>Cooking time: {recipe.recipeDuration} minutes</Text>
      <Text>{recipe.recipeDescription}</Text>
      <FlatList
        ListHeaderComponent={<Text>Ingredients</Text>}
        data={recipe.ingredients}
        renderItem={({item}) => (
          <Text>
            Qty: {item.qty} - {item.ingredientName}
          </Text>
        )}
      />
      <FlatList
        ListHeaderComponent={<Text>Steps</Text>}
        data={recipe.steps}
        renderItem={({item, index}) => (
          <Text>
            {index + 1}: {item}
          </Text>
        )}
      />
    </View>
  );
};
