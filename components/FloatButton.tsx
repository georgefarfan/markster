import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const FloatButton = () => {
  return (
    <TouchableOpacity
      style={{
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
      }}
    >
      <Icon name="plus" size={25} color="#54B18C" />
    </TouchableOpacity>
  );
};
