import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Clipboard,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import * as ClipboardAPI from "expo-clipboard";

export default function MainScreen() {
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let generatedPassword = "";
    for (let i = 0; i < 12; i++) {
      generatedPassword += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    if (password) {
      ClipboardAPI.setString(password);
      Alert.alert("Copied to Clipboard", "Password copied successfully!");
    } else {
      Alert.alert("No Password", "Generate a password first!");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.displayWrapper}>
        <View style={styles.displayContainer}>
          <Text style={styles.displayText}>
            {password ? password : "Generate a password"}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.clipboardContainer}
          onPress={copyToClipboard}
        >
          <Feather name="clipboard" color={"white"} size={24} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.generatePassBtn}
        onPress={generatePassword}
      >
        <Text style={styles.generatePassText}>Generate Password</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  displayWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    width: "85%",
  },
  displayText: {
    color: "#F7FFF7",
    fontSize: 16,
    textAlign: "center",
  },
  displayContainer: {
    padding: 15,
    backgroundColor: "#4D908E",
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    height: "35%",
    flex: 1,
    justifyContent: "center",
  },
  clipboardContainer: {
    padding: 15,
    backgroundColor: "#2A9D8F",
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    justifyContent: "center",
  },
  generatePassBtn: {
    backgroundColor: "#E76F51",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
    marginTop: 20,
  },
  generatePassText: {
    color: "#F7FFF7",
    fontWeight: "bold",
    paddingVertical: 15,
    paddingHorizontal: 30,
    fontSize: 18,
  },
});
