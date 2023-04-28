import { Text, View, StyleSheet } from "react-native";

function List({ data }) {
  return data.map((datapoint) => (
    <View key={datapoint} style={styles.container}>
      <Text style={styles.content}>{datapoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginVertical: 6,
    marginHorizontal: 12,
    backgroundColor: "#f1eff4",
  },
  content: {
    fontSize: 17,
    fontFamily: "regular",
  },
});
