import React, {useState} from 'react';
import {Text, View, ScrollView, Button} from 'react-native';
import {Recipe} from '../types';
import {useAppContext} from '../App.provider';

export const HomeScreen = () => {
  //get dummyData from useContext()
  const recipeData: Recipe[] = useAppContext().appState;

  return (
    <View>
      <Text>{'HomeScreen'}</Text>
      <DisplayRecipeData recipes={recipeData} />
    </View>
  );
};

//Testing: DisplayRecipeData displays output of recipeData received through useAppContext
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
