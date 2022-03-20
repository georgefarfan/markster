import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const width = Dimensions.get("window").width;

export const FileList = () => {
  return (
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
        <View style={styles.item}>
          <Icon name="folder" size={20} color="#54B18C"></Icon>
          <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
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
