import React from 'react';
import {Text, View} from 'react-native';
import {HomeProps} from './BottomTabs.navigator';
import {Recipe} from '../types';

export const RecipeScreen = ({route}: HomeProps) => {
  const recipeData: Recipe[] = route.params.data;
  return (
    <View>
      <Text>{'RecipeScreen'}</Text>
    </View>
  );
};
