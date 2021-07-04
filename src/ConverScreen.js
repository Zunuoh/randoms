import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from "@expo/vector-icons";

const ConverScreen =() =>{
return(
    <View style={{flex:1, padding:20}}>
         <View style={{ flexDirection: "row", paddingTop: 50 }}>
          <View style={{}}>
            <Feather name="arrow-left" size={24} color="black" />
          </View>
          <View style={{ paddingLeft: 330 }}>
            <Feather name="more-vertical" size={24} />
          </View>
        </View>

        <View style={{paddingTop:20}}>
            <Text style={{fontSize:20, fontWeight:"bold"}}>Conversation</Text>
        </View>
    </View>
)
}

export default ConverScreen;