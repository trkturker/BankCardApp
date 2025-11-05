import React from 'react'
import { Landmark, BellDot } from 'lucide-react-native';
import { View, Text, Image, FlatList } from 'react-native';
import CreditCard from './CreditCard';




const CardSlider = () => {

    const data = [
        {
            numbers: '**** **** **** 1234',
            cardHolderName: 'John Green',
            ExpiryDate: '06/27',
        },
        {
            numbers: '**** **** **** 4567',
            cardHolderName: 'Polar Bear',
            ExpiryDate: '08/29',
        },
        {
            numbers: '**** **** **** 4321',
            cardHolderName: 'Dexter Morgan',
            ExpiryDate: '09/29',
        },

    ];



    return (
        <View>

            <FlatList
                data={data}
                keyExtractor={(icon) => icon.ExpiryDate}
                renderItem={({ item }) => <CreditCard numbers={item.numbers} cardHolderName={item.cardHolderName} ExpiryDate={item.ExpiryDate} />}
                contentContainerClassName="gap-2 py-4"
                horizontal={true}
            // ListHeaderComponent={() => <Text>Header</Text>}
            // ListFooterComponent={() => <Text>Footer</Text>}
            />
            <View className="py-6 mb-4 flex-row gap-4 mx-auto">

                <Text className="h-1 rounded-2xl  bg-[#8777a5] w-14" />
                <Text className="h-1 rounded-2xl  bg-gray-300 w-5" />
                <Text className="h-1 rounded-2xl  bg-gray-300 w-5" />
            </View>

        </View>
    )
}

export default CardSlider;