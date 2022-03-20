import { FileList } from "../components/Files";
import { FileManagerScreen } from "./FileManager";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const HomeScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="FileList"
    >
      <Stack.Screen name="FileList" component={FileList} />
      <Stack.Screen name="FileManager" component={FileManagerScreen} />
    </Stack.Navigator>
  );
};
