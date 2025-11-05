import { Tabs } from 'expo-router'
import React from 'react'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Fontisto from '@expo/vector-icons/Fontisto';

const Layout = () => {
  return (
    <Tabs>

      <Tabs.Screen name="wallet"
        options={{
          title: 'Wallet',

          tabBarIcon: ({ color, size }) => <SimpleLineIcons name="wallet" size={size} color={color} />
        }} />

      <Tabs.Screen name="analytics"
        options={{
          title: 'Analytics',
          tabBarIcon: ({ color, size }) => <SimpleLineIcons name="settings" size={size} color={color} />
        }} />

      <Tabs.Screen name="index"
        options={{
          title: 'Anasayfa',
          headerShown: false,
          // headerStyle: {
          //   backgroundColor: 'purple',  
          //   position: 'absolute',
          // },
          tabBarIcon: ({ color, size }) => <Fontisto name="arrow-swap" size={24} color={color} />
        }} />

      <Tabs.Screen name="investing"
        options={{
          title: 'Investing',
          tabBarIcon: ({ color, size }) => <SimpleLineIcons name="home" size={size} color={color} />
        }} />

      <Tabs.Screen name="more"
        options={{
          title: 'More',
          tabBarIcon: ({ color, size }) => <SimpleLineIcons name="home" size={size} color={color} />
        }} />


    </Tabs>
  )
}

export default Layout;