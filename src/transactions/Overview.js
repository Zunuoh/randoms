import React from "react";
import { View, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

const OverviewScreen = () => {
  return (
    <View style={{ backgroundColor: "#F3F8FE", flex: 1, padding: 30 }}>
      <View
        style={{
          backgroundColor: "white",
          marginTop: 40,
          height: 400,
          borderRadius: 20,
          padding: 10,
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          borderRadius: 10,
          elevation: 5,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Feather name="more-vertical" size={24} color="black" />
          </View>
          <View>
            <Feather name="more-vertical" size={24} color="black" />
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/five.jpeg")}
            style={{ width: 90, height: 90, borderRadius: 40 }}
          />
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Hira Riaz</Text>
          <Text style={{ fontSize: 10 }}>UX / UI Deigner</Text>
        </View>
      </View>
    </View>
  );
};

export default OverviewScreen;
