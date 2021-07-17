import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from "@expo/vector-icons";

const PaymentScreen =()=>{
    return(
        <View style={{ backgroundColor: "#F3F8FE", flex: 1, padding: 30}}>
         <View style={{paddingTop:30, flexDirection:"row", justifyContent:"space-between"}}>
             <View>
             <Feather
             name="chevron-left"
             size={28}
             color="black"/>
             </View>
            
            <View style={{}}>
            <Feather
             name="search"
             size={24}
             color="black"/>
            </View>
            
         </View>

         <View style={{marginTop:20, flexDirection:"row", justifyContent:"space-between"}}>
             <View>
             <Text style={{fontWeight:"bold", fontSize:"25", color:"#3B4483"}}>Recent Transactions</Text>
             </View>
             <View>
                 <Text>See all</Text>
             </View>
            
         </View>

         <View style={{flexDirection:"row", marginTop:25}}>
             <View style={{backgroundColor:"#3B4483", width:60, height:25, borderRadius:30, alignItems:"center", justifyContent:"center"}}>
                 <Text style={{color:"white"}}>All</Text>
             </View>
             <View style={{backgroundColor:"white", width:80, height:25, borderRadius:30, alignItems:"center", justifyContent:"center", marginLeft:10}}>
                 <Text>Income</Text>
             </View>
             <View style={{backgroundColor:"white", width:100, height:25, borderRadius:30, alignItems:"center", justifyContent:"center", marginLeft:10}}>
                 <Text>Expense</Text>
             </View>
         </View>

         <View style={{marginTop:20}}>
             <Text style={{fontSize:20, fontWeight:"bold", color:"#3B4483"}}>Today</Text>
         </View>

         <View
          style={{
            backgroundColor: "white",
            marginTop: 25,
            height: 90,
            flexDirection: "row",
            padding: 20,
            shadowOpacity: 0.1,
            shadowRadius: 3.84,
            borderRadius: 30,
            elevation: 5,
          }}
        >
          <View
            style={{
             
              padding: 10,
              justifyContent: "center",
        
            }}
          >
            <Feather name="mail" size={28} />
          </View>

          <View style={{ justifyContent: "center", marginLeft: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Payment</Text>
            <Text>Payment from Andrea</Text>
          </View>

          <View style={{ paddingTop: 28, paddingLeft: 90 }}>
            <Text style={{ fontWeight: "bold" }}>$130.00</Text>
          </View>
        </View>
        </View>
    )
}

export default PaymentScreen;