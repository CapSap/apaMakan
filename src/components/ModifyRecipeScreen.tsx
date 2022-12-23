import React, {useState, useCallback} from 'react';
import {
  Text,
  View,
  Button,
  SafeAreaView,
  FlatList,
  ListRenderItemInfo,
  Pressable,
  StyleSheet,
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
    <View style={styles.container}>
      <Text style={styles.heading}>{'ModifyRecipeScreen'}</Text>
      <View style={styles.recipesList}>
        {recipeData.map(recipe => (
          <View>
            <Pressable
              onPress={() => setSelectedRecipe(recipe.id)}
              key={recipe.id}
              style={[
                recipe.id === selectedRecipe
                  ? styles.selectedRecipeItem
                  : undefined,
              ]}>
              <Text style={styles.recipeText}>{recipe.recipeName}</Text>
            </Pressable>
          </View>
        ))}
      </View>
      <Pressable style={styles.button} onPress={handleSelect}>
        <Text style={styles.buttonText}>Remove </Text>
      </Pressable>
    </View>
  );
};

const theme = {
  colorPurple: '#454C73',
  colorWhite: '#fff',
};

const styles = StyleSheet.create({
  recipeText: {
    fontSize: 24,
  },
  recipesList: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recipeItem: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 5,
  },
  selectedRecipeItem: {
    borderWidth: 2,
    backgroundColor: theme.colorPurple,
    borderColor: theme.colorWhite,
  },
  descriptionText: {
    color: theme.colorPurple,
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
  },
  container: {
    borderWidth: 2,
    borderColor: theme.colorPurple,
    margin: 10,
    borderRadius: 10,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: theme.colorPurple,
    width: 150,
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center',
    padding: 10,
  },
  buttonText: {
    color: theme.colorWhite,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
