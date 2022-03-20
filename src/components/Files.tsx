import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import { FilesState } from "../store/interface/files.interface";
import { FloatButton } from "./FloatButton";

const width = Dimensions.get("window").width;

export const FileList = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: "1", title: "cookies.md" },
          { key: "2", title: "codes.md" },
          { key: "3", title: "moreExamples.md" },
          { key: "4", title: "OtherPLaces.md" },
          { key: "5", title: "MyHome.md" },
          { key: "6", title: "minimal.md" },
          { key: "7", title: "K1.md" },
          { key: "8", title: "Othedk.md" },
          { key: "9", title: "AndroidFiles.md" },
        ]}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              navigation.push("FileManager");
            }}
          >
            <Icon name="file" size={20} color="#313131"></Icon>
            <Text style={styles.itemTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <FloatButton icon="plus"></FloatButton>
    </View>
  );
};

const mapStateToProps = (state: FilesState) => {
  return state.items;
};

export default connect(mapStateToProps)(FileList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderBottomColor: "#787878",
    borderBottomWidth: 1,
    width: width,
    padding: 20,
    margin: 1,
  },
  itemTitle: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: "700",
  },
});
