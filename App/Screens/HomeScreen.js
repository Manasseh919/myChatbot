import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import ChatFaceData from "../Services/ChatFaceData";

const HomeScreen = () => {
  const [chatFaceData, setChatFaceData] = useState();
  const [selectedChatFaceData, setSelectedChatFaceData] =
    useState(ChatFaceData);
  useEffect(() => {
    setChatFaceData(ChatFaceData);
    setSelectedChatFaceData(ChatFaceData[0]);
  }, []);
  return (
    <View style={{ alignItems: "center", paddingTop: 90 }}>
      <Text style={[{ color: selectedChatFaceData.primary }, { fontSize: 30 }]}>
        Hello
      </Text>
      <Text
        style={[
          { color: selectedChatFaceData.primary },
          { fontSize: 30, fontWeight: "bold" },
        ]}
      >
        I am {selectedChatFaceData.name}
      </Text>
      <Image
        source={{ uri: selectedChatFaceData.image }}
        style={{ width: 150, height: 150, marginTop: 20 }}
      />
      <Text style={{ marginTop: 30, fontSize: 25 }}>How can I Help You</Text>
      <View
        style={{
          marginTop: 20,
          backgroundColor: "#f5f5f5",
          alignItems: "center",
          height: 110,
          padding: 10,
          borderRadius: 10,
        }}
      >
        <FlatList
          data={chatFaceData}
          horizontal={true}
          renderItem={({ item }) =>
            selectedChatFaceData.id != item.id && (
              <View style={{ margin: 15 }}>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 40, height: 40 }}
                />
              </View>
            )
          }
        />
        <Text style={{ marginTop: 5, fontSize: 17, color: "#b0b0b0" }}>
          Choose Your Fav ChatBuddy
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
