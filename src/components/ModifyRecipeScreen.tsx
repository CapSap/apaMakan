import React, {useState} from 'react';
import {Text, View, Pressable, StyleSheet, ScrollView} from 'react-native';
import {Recipe} from '../types';
import {useAppContext} from '../App.provider';
import {altDummyRecipes} from '../dummyData';

type SetRecipesType = ((x: Recipe[]) => void) | undefined;
//select modification mode, can either add or remove recipes
type Mode = 'Add' | 'Remove';

export const ModifyRecipeScreen = () => {
  //Get the recipe state & setState function from app context
  const recipeData: Recipe[] = useAppContext().appState;
  const setRecipes: SetRecipesType = useAppContext().setAppState;

  //import newRecipes to emulate a database of recipes and store in state
  const [altRecipes, setAltRecipes] = useState<Recipe[]>(altDummyRecipes);

  //mode will determine what modification will be applied to the selected recipe, what recipes will be displayed
  const [mode, setMode] = useState<Mode>('Add');

  //Define the recipe ID that has been selected
  const [selectedRecipe, setSelectedRecipe] = useState<number | undefined>();

  //callback function that handles recipe modification
  const handleSelect = (modifyMode: Mode) => {
    //if recipe has been selected & handleSelect() called, then update state & restore selectedRecipe from selected ID to undefined
    if (selectedRecipe) {
      modifyMode === 'Remove'
        ? removeRecipe(selectedRecipe)
        : addRecipe(selectedRecipe);
      setSelectedRecipe(undefined);
    }
  };

  //removeRecipe updates recipeData in AppState by removing the recipe with matching id
  const removeRecipe = (selectedRecipeId: number) => {
    //type guard for undefined (nothing selected)
    if (!(setRecipes === undefined)) {
      //create an array of all recipes excluding the selected recipe and update in appState
      const newRecipes: Recipe[] = recipeData
        .slice()
        .filter(recipe => recipe.id !== selectedRecipeId);
      setRecipes(newRecipes);
    }
  };

  //addRecipe updates recipeData in AppState by adding the recipe with matching id and removes it from altRecipes in local state
  const addRecipe = (selectedRecipeId: number) => {
    //type guard for undefined (nothing selected)
    if (setRecipes !== undefined) {
      //Find new recipe with matching id
      const newRecipe: Recipe | undefined = altRecipes.find(
        recipe => recipe.id === selectedRecipeId,
      );
      if (newRecipe !== undefined) {
        //Add new selected recipe to preexisting recipesData
        const newRecipes: Recipe[] = [...recipeData, newRecipe];
        //update the recipes in recipeData AppState
        setRecipes(newRecipes);
        //remove the selectedRecipe from altRecipes
        const newAltRecipes: Recipe[] = altRecipes
          .slice()
          .filter(recipe => recipe.id !== selectedRecipeId);
        setAltRecipes(newAltRecipes);
      }
    }
  };

  return (
    <ScrollView>
      <DisplayRecipeModifier
        recipesList={mode === 'Add' ? altRecipes : recipeData}
        selectedRecipe={selectedRecipe}
        setSelectedRecipe={setSelectedRecipe}
        handleSelect={handleSelect}
        mode={mode}
        setMode={setMode}
      />
    </ScrollView>
  );
};

type DisplayModifierProps = {
  recipesList: Recipe[];
  selectedRecipe?: number;
  setSelectedRecipe: (id: number | undefined) => void;
  handleSelect: (mode: Mode) => void;
  mode: Mode;
  setMode: (mode: Mode) => void;
};

const DisplayRecipeModifier: React.FC<DisplayModifierProps> = ({
  recipesList,
  selectedRecipe,
  setSelectedRecipe,
  handleSelect,
  mode,
  setMode,
}) => {
  //Just get the opposite Mode
  const handleToggleMode = () => setMode(mode === 'Add' ? 'Remove' : 'Add');
  //handler for submitting modification
  const handleMod = () => handleSelect(mode);
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={handleToggleMode}>
        <Text style={styles.buttonText}>Add Recipes</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleToggleMode}>
        <Text style={styles.buttonText}>Remove Recipes</Text>
      </Pressable>
      <Text style={styles.heading}>{'ModifyRecipeScreen'}</Text>
      <View style={styles.recipesList}>
        {recipesList.map(recipe => (
          <View key={recipe.id}>
            <Pressable
              onPress={() => setSelectedRecipe(recipe.id)}
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
      <Pressable style={styles.button} onPress={handleMod}>
        <Text style={styles.buttonText}>
          {mode === 'Add' ? 'Add Recipe' : 'Remove Recipe'}{' '}
        </Text>
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
