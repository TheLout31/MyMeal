import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/DummyData";

function CategoriesScreen({ navigation }) {
  function rederCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('MealsOverview',{
        categoryId:itemData.item.id,
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        imageUrl={itemData.item.imageUrl}
        onpressing={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={rederCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
