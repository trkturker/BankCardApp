import React from 'react'
import { Bell } from 'lucide-react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { View, Text, Image } from 'react-native';



const TopInfo = () => {
    return (
        <View className='flex-row justify-between pt-4 pb-6'>

            <View className='flex flex-row gap-2 items-center'>
                <MaterialCommunityIcons name="cards" size={32} color="#52598a" />
                <Text className='text-2xl text-[#242329] font-bold'>Fastfin</Text>

            </View>

            <View className='flex flex-row gap-2 items-center'>
                <Bell size={32} color="#52598a" fill="#52598a"/>
                <View className='h-12 w-12'>
                    <Image
                        source={{ uri: 'https://plus.unsplash.com/premium_photo-1739178656537-ea88ababab9b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074' }}
                        className='rounded-full w-12 h-12'
                    />
                </View>

            </View>

        </View>
    )
}

export default TopInfo;