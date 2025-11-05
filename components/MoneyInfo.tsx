import { View, Text, Image } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const MoneyInfo = () => {
  return (
    <View className='bg-[#f3f7ff] w-full rounded-xl p-2 py-4'>

      <View className='flex-row justify-between items-center p-4'>

        <View className='flex-row items-center gap-2'>
          <View className='h-12 w-12 items-center'>
            <Image
              source={{ uri: 'https://media.istockphoto.com/id/1849900899/vector/united-states-of-america-flag-correct-proportion-aspect-ratios-of-national-flags-official.jpg?s=612x612&w=0&k=20&c=ZPOO02NJCVYBZuKUTKAk2TI3Pt5mNrliBD4M-d19k1I=' }}
              className='rounded-full w-12 h-12'
               resizeMode="cover"
            />
          </View>

          <Text className="text-2xl text-slate-600">USD</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="gray" />
        </View>

        <View className='flex-row items-center gap-2'>

          <Text className="text-green-600 text-3xl font-bold">15402.01</Text>
        </View>

      </View>

     <View className="h-px mx-4 bg-gray-300 w-scren" />

      <View className="flex-row justify-between items-center p-4">

        <View>
          <Text className="text-sm text-slate-600">IBAN</Text>
          <Text className="text-base text-slate-600">LT12 **** ***** **** 1010</Text>
        </View>

        <MaterialIcons className="rotate-1 border-2 border-slate-400 rounded-full" name="keyboard-arrow-right" size={26} color="gray" />
      </View>

    </View>
  )
}

export default MoneyInfo;