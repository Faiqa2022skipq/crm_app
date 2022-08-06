import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import List from '../screens/List'
import NewScreen from "../screens/New";
import EditScreen from "../screens/Edit";
import ListByRegions from "../screens/ListByRegions";
import Welcome from "../screens/Welcome";



const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Welcome"}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="ListRegions" component={List} />
      
        <Stack.Screen name="Add Customer" component={NewScreen} />
        <Stack.Screen name="Edit Customer" component={EditScreen} />
        <Stack.Screen name="ListByRegions" component={ListByRegions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
