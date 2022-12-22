import React, {useState} from 'react';
import {Text, View, ScrollView, Button} from 'react-native';
import {HomeProps} from './BottomTabs.navigator';
import {Recipe} from '../types';

//Currently HomeScreen receives all recipeData through routes

export const HomeScreen = ({route}: HomeProps) => {
  //react navigation sets all properties of route.params to ReadOnly so need to stringify then parse the object
  const recipeData: Recipe[] = JSON.parse(JSON.stringify(route.params));

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
