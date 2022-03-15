import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, Button, TextInput, Alert, AppRegistry } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";


// custom
import colors from "./utils/colors";
import styles from "./utils/styles";
import lists from "./utils/dummy";
import TaskItems from "./components/TaskItems";


export default function App() {

  

  return (
    <View style={{ flex: 1, backgroundColor: colors.root, marginTop: 20 }}>
      <StatusBar style="auto" backgroundColor={colors.root} />

      <View style={{ backgroundColor: colors.root }}>
        <View
          style={{
            padding: 16,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <MaterialCommunityIcons
            name="text"
            size={30}
            style={{ color: colors.white }}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <MaterialCommunityIcons
              name="bell-outline"
              size={30}
              style={{ color: colors.white }}
            />
            <AntDesign
              name="user"
              size={30}
              style={{ color: colors.white, marginLeft: 12 }}
            />
          </View>
        </View>
        <View style={{ padding: 16 }}>
          <Text
            style={{ fontWeight: "bold", color: colors.white, fontSize: 30 }}
          >
            {"Afternoon Jo"}
          </Text>
          <Text
            style={{
              color: colors.white,
              fontSize: 20,
            }}
          >
            {"Here's the latest"}
          </Text>

          <View style={{ padding: 0 }}>
          <Text
            style={{ fontWeight: "bold", color: colors.green, fontSize: 30 }}
          >
            {"KES 42,000"}
          </Text>
          <Text
            style={{
              color: colors.white,
              fontSize: 20,
            }}
          >
            {"Total Funds"}
          </Text>
            
        </View>
            
        </View>
      </View>

      <View
        style={{
          padding: 20,
          flexDirection: "row",
          backgroundColor: colors.overlay,
          justifyContent: "space-between",
          borderTopRightRadius: 23,
          borderTopLeftRadius: 23,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 19 }}>Your Goals</Text>
      </View>
      <ScrollView style={{ backgroundColor: colors.overlay, flex: 1 }}>
        {lists.map((item) => (
          <TaskItems
            key={item.id}
            icon={item.icon}
            title={item.title}
            theme={item.theme}
            timestamp={item.timestamp}
          />
        ))}
          <View style={{
              padding: 20,
              flex:1,
              justifyContent: "center",
              borderTopRightRadius: 53,
              borderTopLeftRadius: 53,
              alignItems: "center",
            }}>
            <View style={{position: 'absolute',  bottom:0}}>
             <Button onPress={() => Alert.alert(
                    'Its GeeksforGeeks !')} title="Snow Snackbar" color="#08f26e" accessibilityLabel="Tap on Me"/>
        </View>
      </View>
      </ScrollView>

      

    </View>
  );
}

