import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  SafeAreaView,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import {Recipe} from '../types';
import {useAppContext} from '../App.provider';

export const ModifyRecipeScreen = () => {
  const recipeData: Recipe[] = useAppContext().appState;
  const setRecipes: ((x: Recipe[]) => void) | undefined =
    useAppContext().setAppState;
  return (
    <View>
      <Text>{'ModifyRecipeScreen'}</Text>
      <RemoveRecipeButton recipes={recipeData} setRecipes={setRecipes} />
    </View>
  );
};

const RemoveRecipeButton = (props: {
  recipes: Recipe[];
  setRecipes: ((x: Recipe[]) => void) | undefined;
}) => {
  const [displayRemoveOptions, setDisplayRemoveOptions] = useState(false);
  return (
    <SafeAreaView>
      <Button
        title={'Remove Recipe'}
        onPress={() => {
          setDisplayRemoveOptions(true);
          if (props.recipes !== undefined) {
            const [, ...xs] = props.recipes.slice();
            if (xs == !'undefined') {
              props.setRecipes([xs]);
            }
          }
        }}
      />
      {displayRemoveOptions && <RemovePicker recipes={props.recipes} />}
    </SafeAreaView>
  );
};

const RemovePicker = (props: {recipes: Recipe[]}) => {
  return (
    <FlatList
      data={props.recipes}
      renderItem={({item}: ListRenderItemInfo<Recipe>) => (
        <Text>{JSON.stringify(item)}</Text>
      )}
      keyExtractor={(item: Recipe) => item.id}
    />
  );
};
