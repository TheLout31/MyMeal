import { Text, View, StyleSheet, ScrollView, Button } from "react-native";
import { useContext, useLayoutEffect } from "react";
import List from "../components/List";
import { MEALS } from "../data/DummyData";
import Icon from "../components/Icon";
import {FavouriteContext} from '../store/context/FavouriteContext'

function MealDetailScreen({ route, navigation }) {
  const favouriteMealcxt =useContext(FavouriteContext);
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealsIsFav=favouriteMealcxt.ids.include(mealId);
  function changeFavStatusHandler() {
      if(mealsIsFav){
        favouriteMealcxt.removeFavourite(mealId);
      }else{
        favouriteMealcxt.addFavourite(mealId);
      }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Icon onPressing={changeFavStatusHandler} currname={mealsIsFav?'heart':'heart-outlined'} currcolor='red'/>;
      },
    });
  }, [navigation, changeFavStatusHandler]);

  return (
    <ScrollView>
      <View style={styles.mainbox}>
        <Text style={styles.mainTitle}>{selectedMeal.title}</Text>

        <View>
          <Text style={styles.mainTitle}>Ingredients</Text>
          <List data={selectedMeal.ingredients} />
        </View>

        <View>
          <Text style={styles.mainTitle}>Steps</Text>
          <List data={selectedMeal.steps} />
        </View>

        <View>
          <Text style={styles.mainTitle}>Time</Text>
          <Text style={styles.content}>{selectedMeal.duration} min</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  mainbox: {
    margin: 16,
    padding: 10,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 8,
  },
  mainTitle: {
    fontSize: 23,
    textAlign: "center",
    margin: 14,
    fontFamily: "bold",
  },
  content: {
    fontSize: 17,
    fontFamily: "regular",
  },
});
