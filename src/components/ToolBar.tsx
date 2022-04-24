import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";

const CODES_MARKDOWN = {
  H1: {
    code: "#",
  },
  H2: {
    code: "##",
  },
  H3: {
    code: "###",
  },
};

export const ToolBar = () => {
  const selectedOptionBar = (option: any) => {};
  const dispatch = useDispatch();
  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={() => {
          selectedOptionBar(CODES_MARKDOWN.H1);
        }}
      >
        <View style={style.action}>
          <Text>H1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          selectedOptionBar(CODES_MARKDOWN.H2);
        }}
      >
        <View style={style.action}>
          <Text>H2</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          selectedOptionBar(CODES_MARKDOWN.H3);
        }}
      >
        <View style={style.action}>
          <Text>H3</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    height: 45,
    flexDirection: "row",
    flex: 0,
    alignSelf: "stretch",
  },
  action: {
    padding: 10,
  },
});
