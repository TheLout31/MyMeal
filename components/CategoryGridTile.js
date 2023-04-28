import { View, Pressable,Image, Text, StyleSheet } from "react-native";


function CategoryGridTile({ title, color,imageUrl ,onpressing}) {

 

  return (
    <View style={[styles.gridItem,{backgroundColor:color}]}>
      <Pressable android_ripple={{ color: "#ccc" }} style={styles.button} onPress={onpressing}>
        <Image style={styles.image} source={{uri:imageUrl}}/>
        <View style={styles.innerCont}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 19,
    height: 150,
    borderRadius: 17,
    elevation: 8,
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 2 },
    overflow: "hidden",
  },
  button: { flex: 1 },
  innerCont: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 14,
    fontFamily:'semi-bold'
  },
  image: {
    width: "100%",
    height: 100,
  },
});
