import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface Recipe {
  id: number;
  recipeName: string;
  recipeDescription: string;
  recipeImage: string;
  recipeDuration: number;
  ingredients: Ingredient[];
  steps: string[];
}

interface Ingredient {
  ingredientName: string;
  qty: number;
}

// types for HomeScreen navigator
export type StackNavParams = {
  Recipes: undefined;
  Detail: {recipe: Recipe};
};
// type for paramater passed to ReceipeList ie {navigation}
export type RecipeListNavProps = NativeStackScreenProps<
  StackNavParams,
  'Recipes'
>;

// detail screen route type checking
export type DetailProps = NativeStackScreenProps<StackNavParams, 'Detail'>;
