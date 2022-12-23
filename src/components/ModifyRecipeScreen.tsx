import React, {useState, useCallback} from 'react';
import {
  Text,
  View,
  Button,
  SafeAreaView,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import {Recipe} from '../types';
import {useAppContext} from '../App.provider';

type SetRecipesType = ((x: Recipe[]) => void) | undefined;

export const ModifyRecipeScreen = () => {
  //Get the recipe state & setState function from app context
  const recipeData: Recipe[] = useAppContext().appState;
  const setRecipes: SetRecipesType = useAppContext().setAppState;

  //Define the recipe ID that has been selected
  const [selectedRecipe, setSelectedRecipe] = useState<number | undefined>();

  //callback function that handles recipe modification
  const handleSelect = () => {
    //if recipe has been selected update in state & restore selectedRecipe from selected ID to undefined
    if (selectedRecipe) {
      removeRecipe(selectedRecipe);
      setSelectedRecipe(undefined);
    }
  };

  //removeRecipe updates recipeData in AppState by removing the recipe with matching id
  const removeRecipe = (selectedRecipeId: number) => {
    //type guard for undefined to manage type error
    if (!(setRecipes === undefined)) {
      //create an array of all recipes excluding the selected recipe
      const newRecipes: Recipe[] = recipeData
        .slice()
        .filter(recipe => recipe.id !== selectedRecipeId);
      setRecipes(newRecipes);
    }
  };

  return (
    <View>
      <Text>{'ModifyRecipeScreen'}</Text>
      <RemoveRecipe recipes={recipeData} setRecipes={setRecipes} />
    </View>
  );
};

//Props type signature
type RemoveRecipeProps = {recipes: Recipe[]; setRecipes: SetRecipesType};

//Display all recipe titles and remove selected recipe
const RemoveRecipe: React.FC<RemoveRecipeProps> = (
  props: RemoveRecipeProps,
) => {
  return (
    <SafeAreaView>
      <Text>'Select a recipe to remove'</Text>
    </SafeAreaView>
  );
};

//Display a button which when clicked provides user with options for removing a recipe
const RemoveFirstRecipeButton = (props: RemoveRecipeProps) => {
  return (
    <SafeAreaView>
      <Button
        title={'Remove First Recipe'}
        onPress={() => {
          //Destructure tail of recipes
          const [, ...xs] = props.recipes.slice();
          //Type check setRecipes function isn't undefined
          if (!(props.setRecipes === undefined)) {
            //remove first recipe from recipes
            props.setRecipes([...xs]);
          }
        }}
      />
      <RemovePicker recipes={props.recipes} />
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
