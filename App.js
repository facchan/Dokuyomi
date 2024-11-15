import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Pastikan library ikon yang sesuai sudah di-install

// Import komponen layar
import HomeScreen from './screens/HomeScreen';
import ProjekScreen from './screens/ProjekScreen';
import MirrorScreen from './screens/MirrorScreen';
import ProfilScreen from './screens/ProfilScreen';
import SearchScreen from './screens/SearchScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home - Yang Mungkin Anda Suka" 
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home', 
            tabBarIcon: ({ color, size }) => (
              <Icon name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Manga" 
          component={ProjekScreen}
          options={{
            tabBarLabel: 'Manga', 
            tabBarIcon: ({ color, size }) => (
              <Icon name="book-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Apa yang Anda Ingin Cari?" 
          component={SearchScreen}
          options={{
            tabBarLabel: 'Search', 
            tabBarIcon: ({ color, size }) => (
              <Icon name="magnify" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Siapa Karakter Favoritmu?" 
          component={MirrorScreen}
          options={{
            tabBarLabel: 'Chara', 
            tabBarIcon: ({ color, size }) => (
              <Icon name="account-group-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Gweh" 
          component={ProfilScreen}
          options={{
            tabBarLabel: 'Profil', 
            tabBarIcon: ({ color, size }) => (
              <Icon name="account-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
