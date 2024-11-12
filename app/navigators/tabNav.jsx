import { View, Text } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';



import Home from '../screens/Home';
import Mycourse from '../screens/MyCourse';
import Profile from '../screens/Profile';
import Colors from '@/constants/Colors';


const Tab = createBottomTabNavigator();

const tabNav = () => {
  return (
   <Tab.Navigator
     screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY
     }}>
      <Tab.Screen 
      name='Home' 
      component={Home}
      options={{
        tabBarIcon:({color,size}) =>(
          <Ionicons name="home" size={24} color={color} />
        ),
        tabBarLabel:({color})=>(
          <Text style={{color:color}} >Home</Text>
        )
      }}
      />
      <Tab.Screen 
      name='Mycourse' 
      component={Mycourse}
      options={{
        tabBarIcon:({color,size}) =>(
          <Ionicons name="book" size={24} color={color} />
        ),
        tabBarLabel:({color})=>(
          <Text style={{color:color}} >MyCourse</Text>
        )
      }}
      />
      <Tab.Screen 
      name='Profile' 
      component={Profile}
      options={{
        tabBarIcon:({color,size}) =>(
          <Ionicons name="person-circle" size={24} color={color} />
        ),
        tabBarLabel:({color})=>(
          <Text style={{color:color}}>Profile</Text>
        )
      }}
      />
   </Tab.Navigator>
  )
}

export default tabNav