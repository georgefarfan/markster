import { useState } from "react";
import {
  Button,
  Dimensions,
  StyleSheet,
  TextInput,
  View,
  Text,
} from "react-native";
import { FloatButton } from "../components/FloatButton";
import Icon from "react-native-vector-icons/FontAwesome";
import { COLOURS } from "../styles/colours";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ToolBar } from "../components/ToolBar";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

enum modeEditor {
  editor,
  preview,
}

export const FileManagerScreen = () => {
  const [mode, setMode] = useState(modeEditor.editor);
  const [text, setText] = useState("");

  const editor = () => {
    return mode === modeEditor.editor ? (
      <TextInput
        style={styles.textArea}
        multiline={true}
        onChangeText={setText}
        value={text}
        underlineColorAndroid="transparent"
        placeholder="Type something"
        placeholderTextColor="grey"
        numberOfLines={10}
      ></TextInput>
    ) : (
      <View style={styles.preview}>
        <Text>{text}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            setMode(modeEditor.editor);
          }}
        >
          <View>
            <Icon name="code" size={28} color={COLOURS.BLACK_2} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setMode(modeEditor.preview);
          }}
        >
          <View>
            <Icon name="eye" size={28} color={COLOURS.BLACK_2} />
          </View>
        </TouchableOpacity>
      </View>
      {editor()}

      <ToolBar></ToolBar>
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
  header: {
    backgroundColor: "rgb(245, 245, 245)",
    flexDirection: "row",
    width,
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
    fontSize: 10,
  },
  preview: {
    flex: 1,
    backgroundColor: "white",
    width,
    height,
    padding: 10,
    justifyContent: "flex-start",
    textAlignVertical: "top",
  },
  textArea: {
    backgroundColor: "white",
    flex: 1,
    width,
    height,
    padding: 10,
    justifyContent: "flex-start",
    textAlignVertical: "top",
  },
});
