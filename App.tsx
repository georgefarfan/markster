import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./src/app/Home";
import { SettingsScreen } from "./src/app/Setting";
import Icon from "react-native-vector-icons/FontAwesome";
import { BookmarksScreen } from "./src/app/Bookmarks";
import { Provider } from "react-redux";
import filesReducer from "./src/store/reducers/files.reducer";
import { createStore } from "redux";

const Tab = createBottomTabNavigator();
const tabBarStyle = {
  height: 50,
};
const store = createStore(filesReducer);
store.subscribe(() => console.log(store.getState()));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarActiveTintColor: "#54B18C",
              title: "Home",
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={20} />
              ),
              tabBarStyle,
            }}
          />
          <Tab.Screen
            name="Favorites"
            component={BookmarksScreen}
            options={{
              tabBarActiveTintColor: "#54B18C",
              tabBarStyle,
              title: "Favorites",
              tabBarIcon: ({ color, size }) => (
                <Icon name="bookmark" color={color} size={20} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarActiveTintColor: "#54B18C",
              tabBarStyle,
              title: "Setting",
              tabBarIcon: ({ color, size }) => (
                <Icon name="gear" color={color} size={20} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
