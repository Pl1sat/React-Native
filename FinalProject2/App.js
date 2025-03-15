import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { Navigation } from "./src/Navigation";
import ListContextProvider from "./src/Context";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <NavigationContainer>
      <ListContextProvider>
        <RecoilRoot>
          <View style={styles.container}>
            <StatusBar style="light" />
            <Navigation />
          </View>
        </RecoilRoot>
      </ListContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
  },
});
