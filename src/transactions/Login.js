import React from 'react';
import { View,Text, Image, TextInput } from 'react-native';


const LoginScreen =()=>{
    return(
        <View style={{flex:1, padding:20, backgroundColor:"#F3F8FE"}}>         
            <View style={{ marginTop:290, backgroundColor:"white", height:90, borderRadius:10, padding:20,  shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          borderRadius:10,
          elevation: 5,}}>
            <Text style={{fontSize:20}}>Email address</Text>
            <TextInput
            placeholder="Username@gmail.com"
            style={{paddingTop:5, fontSize:20, color:"black"}}
            />
            </View>
           

            <View style={{ marginTop:40, backgroundColor:"white", height:90, borderRadius:10, padding:20,  shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          borderRadius:10,
          elevation: 5,}}>
            <Text style={{fontSize:20}}>Password</Text>
            <TextInput
            placeholder="..........."
            style={{paddingTop:5, fontSize:20}}
            />
            </View>

            <View style={{justifyContent:"center", alignItems:"center", backgroundColor:"#3E4685", marginTop:30, height:70, borderRadius:50}}>
                <Text style={{fontSize:20, color:"white", fontWeight:"bold"}}>Login</Text>
            </View>

            <View style={{flexDirection:"row", marginTop:30, justifyContent:"space-between"}}>
                <View>
                    <Text style={{fontWeight:"700", color:"#74777C"}}>Signup</Text>
                </View>
                <View>
                    <Text style={{fontWeight:"700", color:"#74777C"}}>Forgot Password?</Text>
                </View>
            </View>
           
        </View>
    )
}

export default LoginScreen;