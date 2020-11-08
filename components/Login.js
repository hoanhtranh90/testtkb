/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Platform, StyleSheet, Text,Alert, View,TouchableOpacity,TextInput,Image,Dimensions} from 'react-native';
import axios from 'axios';
const Login = ({ navigation }) => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
    
  _onSubmit=()=>{
    const data = [];
    
    let formdata = new FormData();
    formdata.append("user",username)
    formdata.append("pass",password)
    axios.post("https://tse-sus.herokuapp.com//api/qldt/login", formdata)
    .then((responseJson) => {
      const keys = Object.values(responseJson.data.tkb);
      for(let i = 0 ; i<=4;i++){
      // const datas = ;
      data.push(Object.values(keys[i]))
      }

      navigation.navigate('Tkb',{
      tkb: data
      })
    })
    .catch(e =>{
      console.log(e)
    })
  }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput placeholder="Username" 
           placeholderTextColor="black"
           underlineColorAndroid="transparent"
           style={styles.txtInput}  onChangeText={(username) => setUsername(username)}/>
        <TextInput placeholder="Password" 
            underlineColorAndroid="transparent"
            placeholderTextColor="black"
            secureTextEntry={true}
            style={styles.txtInput}  onChangeText={(password) => setPassword(password)}/>
        <TouchableOpacity onPress={_onSubmit} style={styles.btnLogin}>
            <Text style={styles.txtLogin}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title:{
    fontSize:30,
    color:'red'
  },
  txtInput:{
    backgroundColor: 'rgba(0,0,0, 0.1)',
    width: DEVICE_WIDTH - 40,
    
    marginHorizontal: 20,
    padding:8,
    borderRadius: 20,
    color: '#000',
    marginTop:2
  },
  btnLogin:{
     width: DEVICE_WIDTH - 40,
     backgroundColor:'rgba(0,145,234,1)',
     padding:8,
     borderRadius: 20,
     marginTop:2

  },
  txtLogin:{
    color:'#fff',
    textAlign:'center'
  }
 
});

export default Login;