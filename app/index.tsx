import { Stack, Link } from 'expo-router';

import { View, Text, Image } from 'react-native';
import { Landmark, BellDot } from 'lucide-react-native';


import { Button } from '@/components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  return (
    <SafeAreaView className="flex flex-1 bg-white px-6 font-sans">

      <View className='flex-row justify-between py-4'>
        
        <View className='flex flex-row gap-2 items-center'>
          <Landmark size={32} />
          <Text className='text-2xl text-[#242329] font-bold'>Fastfin</Text>

        </View>

        <View className='flex flex-row gap-2 items-center'>
          <BellDot size={32} color="#46517f" />
          <View className='h-12 w-12'>
            <Image 
              source={{ uri: 'https://unsplash.com/photos/a-man-with-a-beard-standing-in-front-of-a-purple-background-7N5Qi3PYIBI' }} 
              className='rounded-full w-12 h-12'
            />
          </View>

        </View>

      </View>



    </SafeAreaView>
  );
}
