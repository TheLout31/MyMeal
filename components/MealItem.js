import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native";

function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  
}) {
  const navigation = useNavigation();

  function selectMealItemhandler() {
    navigation.navigate("MealDetail", {
      mealId: id,
      
    });
  }

  return (
    <View style={styles.meaItemStyle}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        onPress={selectMealItemhandler}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.attributesContainer}>
          <Text style={styles.attributesText}>{duration}m</Text>
          <Text style={styles.attributesText}>{complexity}</Text>
          <Text style={styles.attributesText}>{affordability}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  meaItemStyle: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 8,
  },

  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontFamily: "medium",
    textAlign: "center",
    fontSize: 18,
    paddingBottom: 10,
  },
  attributesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  attributesText: {
    fontFamily: "extralight",
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "100",
  },
});
