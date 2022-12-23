import React, {useState} from 'react';
import {Text, View, ScrollView, Button} from 'react-native';
import {HomeProps, TestFuncType} from './BottomTabs.navigator';
import {Recipe} from '../types';

export const RecipeScreen = ({route}: HomeProps) => {
  const recipeData: Recipe[] = route.params.container.data;
  const testFunction = route.params.container.test;
  return (
    <View>
      <Text>{'RecipeScreen'}</Text>
      <DisplayRandomRecipe recipes={recipeData} testFunction={testFunction} />
    </View>
  );
};

//Randomly select & display a recipe from recipes
const DisplayRandomRecipe = (props: {
  recipes: Recipe[];
  testFunction: TestFuncType;
}) => {
  const [showRecipe, setShowRecipe] = useState(false);
  const [showFunc, setShowFunc] = useState(false);
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
      <Button
        title={'Access testFunction() from route'}
        onPress={() => {
          setShowFunc(true);
          setRandomRecipe(selectRandomRecipe(props.recipes));
        }}
      />
      {showFunc && (
        <Text>
          {'Result: ' + JSON.stringify(props.testFunction(), null, 4)}
        </Text>
      )}
    </ScrollView>
  );
};

//function to randomly select a recipe
function selectRandomRecipe(recipes: Recipe[]) {
  //get random index
  const randomIndex = Math.floor(Math.random() * recipes.length);
  return recipes[randomIndex];
}
