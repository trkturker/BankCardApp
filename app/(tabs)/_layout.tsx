import { Tabs } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Fontisto from '@expo/vector-icons/Fontisto';

const Layout = () => {
  return (
    <Tabs
      initialRouteName="wallet"
      screenOptions={{
        tabBarStyle: {
          height: 80,
          paddingBottom: 10,
          paddingTop: 10,
        },

        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarActiveTintColor: '#8B5CF6',
        tabBarInactiveTintColor: '#9CA3AF',
      }}
    >
      <Tabs.Screen
        name="wallet"
        options={{
          title: 'Wallet',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="wallet" size={24} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          title: 'Analytics',
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="pie-chart" size={24} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View className="absolute -top-12 items-center justify-center">
              <View className={`w-[60px] h-[60px] rounded-full items-center justify-center shadow-lg bg-violet-700`}>
                <Fontisto name="arrow-swap" size={24} color="white" />
              </View>
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="investing"
        options={{
          title: 'Investing',
          tabBarIcon: ({ color, size }) => (
            // <SimpleLineIcons name="briefcase" size={size} color={color} />
            <SimpleLineIcons name="graph" size={24} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="grid" size={24} color={color} />
          )
        }}
      />
    </Tabs>
  )
}

export default Layout;