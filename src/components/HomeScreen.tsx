import React from 'react';
import {Text, View} from 'react-native';
import {HomeProps} from './BottomTabs.navigator';

export const HomeScreen = ({route}: HomeProps) => {
  const recipeData = route.params;
  return (
    <View>
      <Text>{'HomeScreen'}</Text>
      <Text>{JSON.stringify(recipeData, null, 4)}</Text>
    </View>
  );
};
