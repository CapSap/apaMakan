import {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

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

/*Following types for  route.initialParams in BottomTabs.navigator in case we need them in the future*/
//Define types for each route, implemented by createBottomTabNavigator and HomeProps
type TabsParamList = {
  RecipeScreen: {data: Recipe[]};
  Home: {data: Recipe[]};
};

//Props type for BottomTabs routes
export type HomeProps = BottomTabScreenProps<TabsParamList, 'Home'>;
