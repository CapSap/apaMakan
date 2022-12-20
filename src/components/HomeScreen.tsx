import React, {useState} from 'react';
import {Text, View, ScrollView, Button} from 'react-native';
import {HomeProps} from './BottomTabs.navigator';
import {Recipe} from '../types';

//Currently HomeScreen receives all recipeData through routes

export const HomeScreen = ({route}: HomeProps) => {
  //Note: Type annotation trows a type error because react navigation sets route.params to ReadOnly
  const recipeData: Recipe[] = route.params;

  return (
    <View>
      <Text>{'HomeScreen'}</Text>
      <DisplayRecipeData recipes={recipeData} />
    </View>
  );
};

const DisplayRecipeData = (props: {recipes: Recipe[]}) => {
  const [showRecipes, setShowRecipes] = useState(false);
  const [buttonTitle, setButtonTitle] = useState('Press to Display RecipeData');

  return (
    <ScrollView>
      <Button
        title={buttonTitle}
        onPress={() => {
          setShowRecipes(current => !current);
          setButtonTitle('Press to Hide RecipeData');
        }}
      />
      {showRecipes && <Text>{JSON.stringify(props.recipes, null, 4)}</Text>}
    </ScrollView>
  );
};
