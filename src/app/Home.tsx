import { View } from "react-native";
import { FloatButton } from "../../components/FloatButton";
import { FileList } from "./Files";

export const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FileList></FileList>
      <FloatButton></FloatButton>
    </View>
  );
};
