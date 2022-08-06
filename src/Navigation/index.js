import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import List from '../screens/List'
import NewScreen from "../screens/New";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Welcome"}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="ListRegions" component={List} />
        <Stack.Screen name="Add Customer" component={NewScreen} />


       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
