import React,  { useState,useEffect  }  from 'react';
import {Platform, StyleSheet, Text,Alert,FlatList,List,ListItem, View,TouchableOpacity,TextInput,Image,Dimensions} from 'react-native';

const Tkb = ({route}) =>{
    const tkb  = route.params.tkb;

    var dara = [];
  tkb.forEach(element => {
      element.forEach(bbb => dara.push({"name":bbb}))
      
  });
console.log(dara)
const enderItem1 = (item) => {
    return (
        
        <View style={{ width: 80, height: 100,borderWidth: 1, borderColor: '#C1C0B9'}}>
            <Text>{item}</Text>
        </View>
        
 )  
}
const enderItem = (item) => {
        return (
            
            <View style={{ width: 80, height: 600}}>
                
                {/* <Text>{item[1]}</Text> */}
                <FlatList
                
                data={item}
                listKey={(item, index) => 'D' + index.toString()}
                renderItem={({ item }) => (
                    enderItem1(item)
                )}
                />
            </View>
            
     )  
}
return (
 
    <View>
        <FlatList
        data = {["thứ 2","thứ 3","thứ 4","thứ 5","thứ 6"]}
        numColumns = {5}
        renderItem = {({ item }) => (
            <View style={{ width: 80, height: 30,borderWidth: 1, borderColor: '#C1C0B9'}}>
            <Text>{item}</Text>
        </View>
        )}
        />
        <FlatList
          data={tkb}
          horizontal={false}
          numColumns={5}
          renderItem={({ item }) => (
            enderItem(item)
        )}
        />
        </View>
    
    //    <View>
    //        <Text>{tkb[1][1]}</Text>
    //    </View>
   
      )
  }

export default Tkb