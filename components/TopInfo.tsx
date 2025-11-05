import React from 'react'
import { Landmark, BellDot } from 'lucide-react-native';
import { View, Text, Image } from 'react-native';



const TopInfo = () => {
    return (
        <View className='flex-row justify-between py-4'>

            <View className='flex flex-row gap-2 items-center'>
                <Landmark size={32} />
                <Text className='text-2xl text-[#242329] font-bold'>Fastfin</Text>

            </View>

            <View className='flex flex-row gap-2 items-center'>
                <BellDot size={32} color="#46517f" />
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