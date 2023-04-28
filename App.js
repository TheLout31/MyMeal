import "react-native-gesture-handler";
import { Provider } from "react-redux";
import CategoriesScreen from "./screens/CategoriesScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from "./store/context/redux/Store";
import MealOverviewScreen from "./screens/MealOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavouriteScreen from "./screens/FavouriteScreen";
import FavouriteContextProvider from "./store/context/FavouriteContext";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerContentStyle: { backgroundColor: "#b6aec9" },
        drawerInactiveTintColor: "#716395",
        drawerActiveTintColor: "#f1eff4",
      }}
    >
      <Drawer.Screen
        name="FoodCategories"
        component={CategoriesScreen}
        options={{
          drawerIcon: ({ color, size }) => {
            <Ionicons name="list" color={color} size={size} />;
          },
        }}
      />
      <Drawer.Screen
        name="YourFavourite"
        component={FavouriteScreen}
        options={{
          drawerIcon: ({ color, size }) => {
            <Ionicons name="list" color={color} size={size} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    "semi-bold": require("./assets/fonts/JosefinSans-SemiBold.ttf"),
    medium: require("./assets/fonts/JosefinSans-Medium.ttf"),
    extralight: require("./assets/fonts/JosefinSans-ExtraLight.ttf"),
    bold: require("./assets/fonts/JosefinSans-Bold.ttf"),
    light: require("./assets/fonts/JosefinSans-Light.ttf"),
    regular: require("./assets/fonts/JosefinSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    //<FavouriteContextProvider>
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MealsCategory"
          component={MyDrawer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MealsOverview"
          component={MealOverviewScreen}
          options={{
            title: "MyOptions",
          }}
        />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    //</FavouriteContextProvider>
  );
}
