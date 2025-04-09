import {createStackNavigator} from '@react-navigation/stack';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from "./src/screens/Home";
import Rules from "./src/screens/Rules";
import LoadGame from "./src/screens/LoadGame";
import Credits from "./src/screens/Credits";

const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component= {Home} />
            <Stack.Screen name="LoadGame" component= {LoadGame} />
            <Stack.Screen name="Rules" component= {Rules} />
            <Stack.Screen name="Credits" component= {Credits} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
