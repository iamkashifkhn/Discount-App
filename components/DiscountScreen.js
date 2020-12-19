import React, {useState,useEffect} from 'react';
import {Text, View, StyleSheet, Button,TextInput, TouchableOpacity, navigation} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



  const DiscountScreen =({navigation})=>{
  const [price , setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [discountedPrice, setDiscountedPrice]= useState('');
  const[arr,setArr]= useState([]);
  var a;
  useEffect(()=>{
    const p= (price - ((discount/100)*price)).toFixed(2);
   if(discount>100){
     alert("invalid discount");
     setPrice("");
     setDiscount("");
     setDiscountedPrice("");
    
        }
   else{
     setDiscountedPrice(p);
   }
  },[discount])
  
 const discountCalc =()=>{
      setArr([...arr,
        {
          key: Math.random().toString(),
          originalPrice: price,
          discount: discount,
          remain: discountedPrice,  
        }])
   
      
 }
 const history=()=>{
   navigation.navigate('History',{col: arr});
   setPrice('');
   setDiscount('');
   setDiscountedPrice('') 
 }
 

return(
  <View style={styles.container}>
      
      <Text 
      style={{
        fontSize: 34, 
        fontWeight:'bold',
        fontFamily: 'san-serif',
        fontStyle: 'italic' }}> 

      Discount App 
      
      </Text>
     
      
      <TextInput
      style={styles.input}
      autoCapitalize = 'none'
      autoCorrect = {false}
      placeholder ='Total Price'
      keyboardType='numeric'
      value ={price}
      onChangeText={(newValue)=> setPrice(newValue)}
      />
      
      <TextInput
      style={styles.input}
      autoCapitalize = 'none'
      autoCorrect = {false}
      placeholder ='Discount'
      keyboardType='numeric'
      value ={discount}
      onChangeText={(newValue1)=> setDiscount(newValue1)}
    
      />
    
      <View style={{marginVertical: 10}}>
      <Text style={{fontWeight:'bold'}}> You saved:  {(price-discountedPrice).toFixed(2)}</Text>
      <Text style={{fontWeight:'bold'}}> Final Price:  {discountedPrice}  </Text>
      </View>

       <View style={styles.disableBtn}>
      <Button 
        style={{width:100}}
        title="Save" 
        disabled={price.length <=0  || discount.length<=0}
        onPress={discountCalc}
      />
      </View>
    
     

      <View style={{marginVertical:10,width:100}}>
          <Button
          title="History"
          
          onPress={history}
          />
      </View>
    
  </View>
)
}



const styles = StyleSheet.create({
container:{
  flex: 1,
  backgroundColor: '#e6e6e6',
  alignItems: "center",
  justifyContent: "center",
},
disableBtn:{
  width:100,
},
input:{
  margin: 15,
  padding: 10,
  borderColor: 'black',
  borderWidth: 1,
  borderRadius: 5,
  backgroundColor: 'white',
  width: 200,
},



});

export default DiscountScreen;