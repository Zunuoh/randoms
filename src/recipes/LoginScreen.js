import React from 'react';
import { View,Text, ImageBackground } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

const LoginScreen = () =>{
    return(
        <View style={{flex:1}}>
            <ImageBackground source={require("../../assets/dark2.jpeg")} style={{width:'100%', height:"100%", justifyContent:"center", alignItems:"center"}}>
                <View style={{marginBottom:60, flexDirection:"row"}}>
                    <View>
                        <Feather
                        name="smile"
                        size={44}/>
                    </View>
                    <View style={{paddingLeft:10}}>
                    <Text style={{fontSize:RFValue(40), fontWeight:"bold", color:"orange"}}>FOODIE</Text>
                    </View>
                   
                </View>
            <View style={{backgroundColor:"red", width:RFValue(285), padding:RFValue(20),  height:RFValue(400), borderRadius:30 }}>
               <Text>
                   jhj
               </Text>
            </View>
            </ImageBackground>
           
        
            
        </View>
    )
}

export default LoginScreen;