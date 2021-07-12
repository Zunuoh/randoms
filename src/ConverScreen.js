import React, { useState } from 'react';
import { View, Text, TextInput, Image, ScrollView } from 'react-native';
import { Feather } from "@expo/vector-icons";
const convoList = [{"id":"0", "name":"Beverly Jones", "image":require("../assets/five.jpeg")}, {"id":"1", "name":"Crystal Flores", "image":require("../assets/four.jpeg")}, {"id":"2", "name":"Brittany Hart", "image":require("../assets/nine.jpeg")}, {"id":"3", "name":"Deboah Flores", "image":require("../assets/one.jpeg")},
{"id":"4", "name":"Beverly Jones", "image":require("../assets/three.jpeg")}]

const ConverScreen =() =>{
  const [convos, setConvos] = useState(convoList);
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

        <View style={{paddingTop:10}}>
            <Text style={{fontSize:20, fontWeight:"bold"}}>Conversation</Text>
            <View style={{backgroundColor:"blue", marginTop:30, padding:20, backgroundColor:"white",  shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          borderRadius:10,
          elevation: 5,}}>
              <TextInput
              placeholder="Search friend"
              />
            </View>
        </View>
          
          <View>
          <ScrollView>
          {convos && convos.map((convo=>{
          return(
           <View>
              <View style={{flexDirection:"row", paddingTop:40, paddingLeft:10}}>
          <View>
            <Image source={convo.image} style={{width:70, height:70, borderRadius:40}}/>
          </View>
          <View style={{padding:10}}>
            <Text style={{fontSize:20}}>{convo.name}</Text>
            <Text style={{paddingTop:5, color:"grey"}}>hjbfbfhj</Text>
          </View>
        </View>
        </View>
          )

        }))}
          </ScrollView>

          </View>
          
          <View style={{marginTop:20, marginLeft:300, backgroundColor:"#F08AB7", padding:30, borderRadius:50}}>
            <Feather
            name="edit-3"
            size={24}
            color="white"
            />
          </View>
          
          
       
        
        
        
        <View>
       
        </View>
        
    </View>
)
}

export default ConverScreen;