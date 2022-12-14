import React, {useState} from 'react';
import {Text, View, ScrollView, Button} from 'react-native';
import {Recipe} from '../types';
import {useAppContext} from '../App.provider';

export const RecipeScreen = () => {
  const recipeData: Recipe[] = useAppContext().appState;
  return (
    <View>
      <Text>{'RecipeScreen'}</Text>
      <DisplayRandomRecipe recipes={recipeData} />
    </View>
  );
};

//Randomly select & display a recipe from recipes
const DisplayRandomRecipe = (props: {recipes: Recipe[]}) => {
  const [showRecipe, setShowRecipe] = useState(false);
  const [randomRecipe, setRandomRecipe] = useState<Recipe | undefined>();
  return (
    <ScrollView>
      <Button
        title={'Get Random Recipe'}
        onPress={() => {
          setShowRecipe(true);
          setRandomRecipe(selectRandomRecipe(props.recipes));
        }}
      />
      {showRecipe && <Text>{JSON.stringify(randomRecipe, null, 4)}</Text>}
    </ScrollView>
  );
};

//function to randomly select a recipe
function selectRandomRecipe(recipes: Recipe[]) {
  //get random index
  const randomIndex = Math.floor(Math.random() * recipes.length);
  return recipes[randomIndex];
}
