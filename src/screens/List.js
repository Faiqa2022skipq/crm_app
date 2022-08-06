import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Button from "../components/Button";

import Loading from '../components/Loading';
// import {
//   useClearCustomers,
//   useLoadCustomers,
// } from "../features/customer/hooks";

function List() {
//   const customers = useLoadCustomers();
//   const { onClear } = useClearCustomers();
   const { navigate } = useNavigation();

  
  return (
    <SafeAreaView>
      <ScrollView>
        <Button
          text="Add  Customer"
          onPress={() => {
            navigate("Add Customer");
          }}
        />
        <Text> List of Regions:</Text>
        <Text> Select Region to select:</Text>

         <Button
          text="South East"
        //   onPress={() => {
        //     navigate("ListRegions");
        //   }}
        />
           <Button
          text="South West"
        //   onPress={() => {
        //     navigate("ListRegions");
        //   }}
        />
           <Button
          text="Middle East"
        //   onPress={() => {
        //     navigate("ListRegions");
        //   }}
        />
           <Button
          text="Middle West"
        //   onPress={() => {
        //     navigate("ListRegions");
        //   }}
        />
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
export default List;
