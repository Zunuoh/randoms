import React from "react";
import { View, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

const OverviewScreen = () => {
  return (
    <View style={{ backgroundColor: "#F3F8FE", flex: 1, padding: 30 }}>
      <View
        style={{
          backgroundColor: "white",
          marginTop: 50,
          height: 330,
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
            <Feather name="arrow-left" size={24} color="black" />
          </View>
          <View>
            <Feather name="more-vertical" size={24} color="black" />
          </View>
        </View>

        <View
          style={{
            marginTop: 30,
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

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 50,
            paddingRight: 50,
            paddingTop: 30,
          }}
        >
          <View>
            <Text style={{ fontSize: 20, color: "#3E4685", fontWeight: "500" }}>
              $8900
            </Text>
            <Text style={{ paddingTop: 10, fontSize: 10 }}>Income</Text>
          </View>
          <View>
            <Text style={{ fontSize: 20, color: "#3E4685", fontWeight: "500" }}>
              $8900
            </Text>
            <Text style={{ paddingTop: 10, fontSize: 10 }}>Expenses</Text>
          </View>
          <View>
            <Text style={{ fontSize: 20, color: "#3E4685", fontWeight: "500" }}>
              $8900
            </Text>
            <Text style={{ paddingTop: 10, fontSize: 10 }}>Loan</Text>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "row", marginTop: 30 }}>
        <View>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "#3E4685" }}>
            Overview
          </Text>
        </View>
        <View style={{ paddingLeft: 10, paddingTop: 8 }}>
          <Feather name="bell" size={20} color="black" />
        </View>
        <View style={{ paddingTop: 8, marginLeft: 160 }}>
          <Text style={{ fontWeight: "bold", color: "#3E4685" }}>
            Sept 13, 2020
          </Text>
        </View>
      </View>

      <View>
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
              backgroundColor: "#E6E7F9",
              padding: 10,
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Feather name="arrow-up" size={24} />
          </View>

          <View style={{ justifyContent: "center", marginLeft: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Sent</Text>
            <Text>Sending payment to client</Text>
          </View>

          <View style={{ paddingTop: 28, paddingLeft: 90 }}>
            <Text style={{ fontWeight: "bold" }}>$150</Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "white",
            marginTop: 25,
            height: 90,
            flexDirection: "row",
            padding: 20,
            shadowOpacity: 0.1,
            shadowRadius: 2.0,
            borderRadius: 30,
            elevation: 21,
          }}
        >
          <View
            style={{
              backgroundColor: "#E6E7F9",
              padding: 10,
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Feather name="arrow-down" size={24} />
          </View>

          <View style={{ justifyContent: "center", marginLeft: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Receive</Text>
            <Text>Receiving salary from work</Text>
          </View>

          <View style={{ paddingTop: 28, paddingLeft: 90 }}>
            <Text style={{ fontWeight: "bold" }}>$250</Text>
          </View>
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
              backgroundColor: "#E6E7F9",
              padding: 10,
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Feather name="dollar-sign" size={24} />
          </View>

          <View style={{ justifyContent: "center", marginLeft: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Loan</Text>
            <Text>Loan for the car</Text>
          </View>

          <View style={{ paddingTop: 28, paddingLeft: 150 }}>
            <Text style={{ fontWeight: "bold" }}>$400</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 30,
            justifyContent: "space-around",
          }}
        >
          <View>
            <Feather name="home" size={24} color="black" />
          </View>

          <View>
            <Feather name="credit-card" size={24} color="black" />
          </View>

          <View
            style={{ backgroundColor: "#3B4483", padding: 4, borderRadius: 10 }}
          >
            <Feather name="plus" size={24} color="black" />
          </View>

          <View>
            <Feather name="dollar-sign" size={24} color="black" />
          </View>

          <View>
            <Feather name="user" size={24} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default OverviewScreen;
