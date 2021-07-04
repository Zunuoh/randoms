import React from "react";
import { View, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#F4F8FD" }}>
      <View
        style={{
          backgroundColor: "#FAFBFC",
          padding: 20,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}
      >
        <View style={{ flexDirection: "row", paddingTop: 50 }}>
          <View style={{}}>
            <Feather name="arrow-left" size={24} color="black" />
          </View>
          <View style={{ paddingLeft: 330 }}>
            <Feather name="more-vertical" size={24} />
          </View>
        </View>

        <View style={{ paddingTop: 15 }}>
          <Text style={{ fontSize: "25", fontWeight: "bold" }}>My Profile</Text>
        </View>

        <View
          style={{
            paddingTop: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/two.jpeg")}
            style={{ width: 110, height: 110, borderRadius: "50" }}
          />

          <View style={{ paddingTop: 30 }}>
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>
              Anna Alvarado
            </Text>
          </View>

          <View style={{ paddingTop: 15 }}>
            <Text style={{ fontSize: 20, color: "#BDCBE5" }}>
              Guldhali School of Music & Drama
            </Text>
          </View>

          <View style={{ paddingTop: 5 }}>
            <Text style={{ fontSize: 20, color: "#BDCBE5" }}>London, UK</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 40,
          }}
        >
          <View>
            <Text style={{ fontSize: 20, color: "#BDCBE5" }}>Photos</Text>
            <View style={{ alignItems: "center", paddingTop: 10 }}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>456</Text>
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 20, color: "#BDCBE5" }}>Followers</Text>
            <View style={{ alignItems: "center", paddingTop: 10 }}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>602</Text>
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 20, color: "#BDCBE5" }}>Follows</Text>
            <View style={{ alignItems: "center", paddingTop: 10 }}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>290</Text>
            </View>
          </View>
        </View>
      </View>

      <View>
        <View style={{ flexDirection: "row", marginTop: 30, padding: 20 }}>
          <View>
            <Image
              source={require("../assets/nine.jpeg")}
              style={{
                height: 300,
                width: 190,
                borderRadius: 10,
                marginLeft: 10,
              }}
            />
          </View>

          <View style={{ paddingLeft: 15 }}>
            <Image
              source={require("../assets/eight.jpeg")}
              style={{ height: 150, width: 170, borderRadius: 20 }}
            />
            <Image
              source={require("../assets/seven.jpeg")}
              style={{
                height: 140,
                width: 170,
                marginTop: 10,
                borderRadius: 20,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
