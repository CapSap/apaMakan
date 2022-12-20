import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {HomeProps} from './BottomTabs.navigator';

type navType = HomeProps['navigation'];
type routeType = HomeProps['route'];

export const HomeScreen = ({route}: HomeProps) => {
  const recipeData = route.params;
  return (
    <ScrollView>
      <Text>{'HomeScreen'}</Text>
      <Text>{JSON.stringify(recipeData, null, 4)}</Text>
    </ScrollView>
  );
};
