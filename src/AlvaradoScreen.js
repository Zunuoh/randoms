import React from 'react';
import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import {Feather }from '@expo/vector-icons';

const AlvaradoScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "#F6FAFF" }}>
            <View style={{ flexDirection: "row", marginTop: 80, padding: 30 }}>
                <View>
                    <Text style={{ fontSize: 20 , color:"#A6B9DB"}}>Hello,</Text>
                    <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 5 }}>Alvarado!</Text>
                </View>
                <View>
                    <Image source={require("../assets/two.jpeg")} style={{ width: 80, height: 80, borderRadius: 40, marginLeft: 180, marginTop: -18 }} />
                </View>
            </View>

            <View style={{
                backgroundColor: "#FFFFFF", width: 360, marginLeft: 30, height: 60, borderRadius: 10, padding: 20, shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
            }}>
                <TextInput
                    placeholder="Search friend"
                />
            </View>

            <View style={{marginTop:40}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{ width: 90, height: 90, borderRadius: 40, marginLeft: 30, backgroundColor:"red", justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                 <Feather
                 name="plus"
                 size={26}
                 color="#A6B9DB"
                 />
                </View>

                <View>
                    <Image source={require("../assets/three.jpeg")} style={{ width: 90, height: 90, borderRadius: 40, marginLeft: 30, borderColor:"red", borderWidth:1}} />
                </View>

                <View>
                    <Image source={require("../assets/four.jpeg")} style={{ width: 90, height: 90, borderRadius: 40, marginLeft: 30, borderColor:"red", borderWidth:1}} />
                </View>

                <View>
                    <Image source={require("../assets/six.jpeg")} style={{ width: 90, height: 90, borderRadius: 40, marginLeft: 30, borderColor:"red", borderWidth:1}} />
                </View>
                </ScrollView>
            </View>

            <View style={{backgroundColor:"white", width:350, height:400, marginTop:50, marginLeft:40, borderRadius:10,  shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
            }}>
                <Image source={require("../assets/five.jpeg")} style={{width:350, height:320, borderTopRightRadius:10, borderTopLeftRadius:10}}/>

                <View style={{flexDirection:"row", marginTop:15, marginLeft:10}}>
                    <View style={{marginLeft:10}}>
                    <Image source={require("../assets/seven.jpeg")} style={{width:50, height:50, borderRadius:30}}/>
                    </View>

                    <View style={{justifyContent:"center", paddingLeft:20}}>
                        <Text>Shane Robertson</Text>
                        <Text style={{marginTop:5, color:"#A6B9DB"}}>32m ago</Text>
                    </View>

                    <View style={{paddingLeft:120, justifyContent:"center"}}>
                        <Feather
                        name="more-vertical"
                        size={24}
                        />
                    </View>
                   

                </View>

            </View>















        </View>
    )
}

export default AlvaradoScreen;