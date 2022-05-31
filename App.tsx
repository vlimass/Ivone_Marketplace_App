import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';

// SCREENS
import ServiceCard from './src/components/serviceCard';
import Home from './src/screens/homeScreen';
import LoginScreen from './src/screens/LoginScreen/Index';
import MainMenu from './src/screens/mainMenu';
import ProfileScreen from './src/screens/ProfileScreen/Index';
import RegisterScreenBirthday from './src/screens/RegisterScreenBirthday/Index';
import RegisterScreenCPF from './src/screens/RegisterScreenCPF/Index';
import SearchScreen from './src/screens/searchScreen';
import ServiceScreen from './src/screens/ServiceScreen/Index';
import HomeGuest from './src/screens/homeGuest';
import RegisterScreenName from './src/screens/RegisterScreenName/Index';
import RegisterScreenEmail from './src/screens/RegisterScreenEmail/Index';
import RegisterScreenPassword from './src/screens/RegisterScreenPassword/Index';
import RegisterScreenPasswordConf from './src/screens/RegisterScreenPasswordConf/Index';
import RegisterScreenComplete from './src/screens/RegisterScreenComplete/Index';
import SearchBar from './src/components/searchBar';


// NAVIGATION
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="MainMenu" component={MainMenu} options={{headerShown: false, title: ' '}}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false, title: ' '}}/>
        <Stack.Screen name="SearchScreen" component={SearchScreen} options={{headerShown: false}}/>
        <Stack.Screen name="HomeGuest" component={HomeGuest} options={{headerShown: true, title: ' ', headerStyle: {backgroundColor:'#381D2A'},headerTintColor: '#CCC9DC'}}/>
        <Stack.Screen name="ServiceScreen" component={ServiceScreen} options={{headerShown: true, title: '', headerStyle: {backgroundColor:'#381D2A'},headerTintColor: '#fff'}} />
        <Stack.Screen name="RegisterScreenCPF" component={RegisterScreenCPF} options={{headerShown: false}}/>
        <Stack.Screen name="RegisterScreenName" component={RegisterScreenName} options={{headerShown: false}}/>
        <Stack.Screen name="RegisterScreenBirthday" component={RegisterScreenBirthday} options={{headerShown: false}}/>
        <Stack.Screen name="RegisterScreenEmail" component={RegisterScreenEmail} options={{headerShown: false}}/>
        <Stack.Screen name="RegisterScreenPassword" component={RegisterScreenPassword} options={{headerShown: false}}/>
        <Stack.Screen name="RegisterScreenPasswordConf" component={RegisterScreenPasswordConf} options={{headerShown: false}}/>
        <Stack.Screen name="RegisterScreenComplete" component={RegisterScreenComplete} options={{headerShown: false}}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown: true, title: '', headerStyle: {backgroundColor:'#381D2A'},headerTintColor: '#fff'}}/>

      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
