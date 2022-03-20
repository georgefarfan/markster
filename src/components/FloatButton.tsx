import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

type Params = {
  icon: string;
};

export const FloatButton = (params: Params) => {
  const iconName = () => {
    switch (params.icon) {
      case "plus":
        return <Icon name="plus" size={20} color="#54B18C" />;
      case "save":
        return <Icon name="save" size={28} color="#54B18C" />;
    }
  };
  return (
    <TouchableOpacity style={style.container}>{iconName()}</TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    position: "absolute",
    bottom: 10,
    right: 10,
    height: 70,
    backgroundColor: "#fff",
    borderRadius: 100,
  },
});
