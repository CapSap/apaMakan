import React, {useState} from 'react';
import {Text, View, ScrollView, Button} from 'react-native';
import {HomeProps} from './BottomTabs.navigator';
import {Recipe} from '../types';

export const HomeScreen = ({route}: HomeProps) => {
  const recipeData: Recipe[] = route.params.data;

  return (
    <View>
      <Text>{'HomeScreen'}</Text>
      <DisplayRecipeData recipes={recipeData} />
    </View>
  );
};

//Testing: DisplayRecipeData displays output of recipeData received through route.params to check contents
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
