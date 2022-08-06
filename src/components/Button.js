import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

// function Button({ text, onPress, disabled = false }) {
//   return (
//     <View>
//       <TouchableOpacity
//         style={styles.BtnContainer}
//         onPress={onPress}
//         disabled={disabled}
//       >
//         <Text style={styles.BtnText}>{text}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   BtnContainer: {
//     flex: 1,
//     width: 200,
//     height: 50,
//     padding: 10,
//     margin: 15,
//     alignSelf: "center",
//     backgroundColor: "#3b5998",
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 20,
//   },
//   BtnText: {
//     color: "#ffffff",
//     fontSize: 18,
//   },
// });

const Button = ({ onPress, text }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{text}</Text>
    </TouchableOpacity>
  );
  const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
      elevation: 8,
      flex: 1,
          width: 200,
          height: 50,
          padding: 10,
          alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
          margin: 15,
      backgroundColor: "#009688",
      borderRadius: 50,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });
export default Button;
