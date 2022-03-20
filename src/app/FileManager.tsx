import { Dimensions, StyleSheet, TextInput, View } from "react-native";
import { FloatButton } from "../components/FloatButton";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const FileManagerScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textArea}
        multiline={true}
        underlineColorAndroid="transparent"
        placeholder="Type something"
        placeholderTextColor="grey"
        numberOfLines={10}
      ></TextInput>
      <FloatButton icon="save"></FloatButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    margin: 1,
  },
  textArea: {
    backgroundColor: "white",
    flex: 1,
    width,
    height,
    justifyContent: "flex-start",
    textAlignVertical: "top",
  },
});
