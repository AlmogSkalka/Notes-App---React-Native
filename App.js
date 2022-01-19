import { StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AddNewNote from './src/Screens/AddNewNote';
import Home from './src/Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddNewNote" component={AddNewNote} />
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
