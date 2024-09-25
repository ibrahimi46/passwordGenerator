import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import MainScreen from "./app/screens/MainScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <MainScreen />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D1E33",
    alignItems: "center",
    justifyContent: "center",
  },
});
