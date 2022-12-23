import React, {useState} from 'react';
import {Text, View, ScrollView, Button} from 'react-native';
import {HomeProps, TestHook} from './BottomTabs.navigator';
import {Recipe} from '../types';

export const RecipeScreen = ({route}: HomeProps) => {
  const recipeData: Recipe[] = route.params.container.data;
  const testFunction = route.params.container.test;
  const hookResult = route.params.container.hookResult;
  return (
    <View>
      <Text>{'RecipeScreen'}</Text>
      <DisplayRandomRecipe
        recipes={recipeData}
        testFunction={testFunction}
        hookResult={hookResult}
      />
    </View>
  );
};

//Randomly select & display a recipe from recipes
const DisplayRandomRecipe = (props: {
  recipes: Recipe[];
  testFunction: TestFuncType;
  hookResult: string;
}) => {
  const [showRecipe, setShowRecipe] = useState(false);
  const [showFunc, setShowFunc] = useState(true);
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
        title={'Iterate testHook value by 1'}
        onPress={() => {
          props.testFunction(props.hookResult + 1);
        }}
      />
      {showFunc && (
        <Text>{'Result: ' + JSON.stringify(props.hookResult, null, 4)}</Text>
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
