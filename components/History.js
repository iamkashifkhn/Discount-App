import React,{useState} from 'react';
import { Text, View, StyleSheet, Button, TouchableHighlight, ScrollView } from 'react-native';

const History = ({ route, navigation }) => {
  const { col } = route.params;
  const[col1,setCol]=useState(col);
  console.log(col)
  return (
    <View style={styles.container}>
      <View 
      style={{
      flexDirection:'row',
      borderWidth:1,
      borderColor:'#0a043c',
      justifyContent:"space-between",
      paddingVertical:15,}}>

      <Text style={styles.headers}> Original Price  </Text>
      <Text> - </Text>
      <Text style={styles.headers}> Discount % </Text>
      <Text> = </Text>
      <Text style={styles.headers}>  Final Price </Text>
     
      </View>
      <ScrollView>
      {col1.map((item, key) => (
        <View key={key} 

              style={{flexDirection:"row",
              borderColor:'black',
              borderWidth:1,
              paddingVertical:10,  
              justifyContent:'space-between',
              paddingHorizontal:10,
              }}>
              
             <Text> {item.originalPrice} </Text>
             <Text> - </Text>
             <Text>{item.discount} </Text>
             <Text> = </Text>
             <Text> {item.remain}</Text>
             
        </View>  
      ))}
      <View>
         <TouchableHighlight style={styles.clrHistory}
         onPress={()=>{setCol([])}}
         >
              <Text style={{ fontWeight: "bold",}}> Clear History </Text>
         </TouchableHighlight>
      </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  clrHistory:{
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor:'#d68060',
    width:100,
    paddingVertical: 5,
    alignItems: "center",
    marginTop:10,
    borderRadius: 10,
    borderColor: 'red',
    borderWidth:1,
   
  },
  container:{
    backgroundColor:'#e6e6e6',
    flex: 1,
  },
  headers:{
    fontSize:14,
    fontWeight: "bold",
  
  },


});
export default History;
