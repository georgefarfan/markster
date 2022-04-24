import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { COLOURS } from "../styles/colours";

type Params = {
  icon: string;
};

export const FloatButton = (params: Params) => {
  const iconName = () => {
    switch (params.icon) {
      case "plus":
        return <Icon name="plus" size={20} color={COLOURS.GREEN_1} />;
      case "save":
        return <Icon name="save" size={28} color={COLOURS.GREEN_1} />;
    }
  };
  return (
    <TouchableOpacity style={style.container}>{iconName()}</TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLOURS.BLACK_1,
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    position: "absolute",
    bottom: 50,
    right: 10,
    height: 70,
    backgroundColor: COLOURS.WHITE_1,
    borderRadius: 100,
  },
});
