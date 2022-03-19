import { useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

 
 export const HomeScreen =() => {
    const [files, setFiles] = useState();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
          {key: 'Jillian2'},
          {key: 'Jimmy1'},
          {key: 'Julie2'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
      </View>
    )
 }

 const styles = StyleSheet.create({
    container: {

     flex: 1,
     paddingTop: 22
    },
    item: {        
       fontWeight:'500',
      backgroundColor:'#efefef', 
      borderBottomColor:'#787878',
      borderBottomWidth: 1,
      width: width,        
      padding: 20,
      margin: 1,
      fontSize: 18,
      
    },
  });