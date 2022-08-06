import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Button from "../components/Button";
import {
  useClearCustomers,
  useLoadCustomers,
} from "../features/hooks";


import Loading from '../components/Loading';



function Welcome() {
  const { status, clearCustomers } = useLoadCustomers()

  const { onClear } = useClearCustomers();
  const { navigate } = useNavigation();
  const handleClearStorage = () => {
    onClear();
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <>
          <Text style={styles.text}>Welcome to customer Management App</Text>


          <Button
            text="Click to Continue"
            onPress={() => {
              navigate("ListRegions");
            }}
          />






          <Button
            text="Clear Storage"
            onPress={handleClearStorage}
          />


        </>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  text: {
    marginVertical: 7,
    marginHorizontal: 4,
    color: "#263036",
    fontSize: 18,
  },
});
export default Welcome;
