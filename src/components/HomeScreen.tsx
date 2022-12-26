import React from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Recipe} from '../types';
// import {RecipeCard} from './ReceipeCard';
import {useAppContext} from '../App.provider';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RecipeDetail} from './RecipeDetail';

export const HomeScreen = () => {
  //get dummyData from useContext()
  const recipeData: Recipe[] = useAppContext().appState;

  const Stack = createNativeStackNavigator();

  const RecipeList = ({navigation}) => {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.list}
          data={recipeData}
          renderItem={({item}: {item: Recipe}) => {
            const onPress = () => {
              navigation.navigate('Detail', {item});
            };

            return (
              <TouchableOpacity onPress={onPress} style={styles.card}>
                <Text style={styles.time}>{item.recipeDuration}m</Text>
                <Text style={styles.image}>{item.recipeImage}</Text>
                <Text style={styles.title}>{item.recipeName}</Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => item.recipeName + item.id + index}
          numColumns={2}
        />
      </View>
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name="Recipes" component={RecipeList} />
      <Stack.Screen name="Detail" component={RecipeDetail} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  list: {
    alignContent: 'space-around',
  },
  card: {
    backgroundColor: 'teal',
    height: 150,
    width: 150,
    border: 1,
    margin: 10,
    borderRadius: 10,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  time: {
    alignSelf: 'flex-start',
    margin: 5,
    padding: 2,
    width: 35,
  },
  image: {
    fontSize: 30,
  },
  title: {
    fontSize: 20,
    padding: 2,
    paddingBottom: 25,
  },
});
