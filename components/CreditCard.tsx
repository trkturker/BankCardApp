import React from "react";
import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface CreditCardProps {
    numbers: string;
    cardHolderName: string;
    ExpiryDate: string;
}

const CreditCard = ({ numbers, cardHolderName, ExpiryDate }: CreditCardProps) => {
    return (
        // <View className="rounded-xl">

        <View className="rounded-2xl overflow-hidden w-96 h-56">
            <LinearGradient
                colors={["#37216b", "#7B5CFF", "#37216b"]}
                start={{ x: 1, y: 1 }}
                end={{ x: 0, y: 0 }}
                className="w-full h-full p-7 gap-6 font-sans"
            >

                {/* Top Row */}
                <View className="flex-row justify-between items-center">
                    <Text className="text-white text-2xl font-bold">VISA</Text>
                </View>

                {/* Card Number */}
                <Text className="text-white text-2xl tracking-widest font-semibold">
                    **** **** **** {numbers.slice(-4)}
                </Text>

                {/* Bottom Info */}
                <View className="flex-row gap-6 mt-2">
                    <View>
                        <Text className="text-gray-200 text-s">Card Holder Name</Text>
                        <Text className="text-white text-base font-medium">
                            {cardHolderName}
                        </Text>
                    </View>
                    <View>
                        <Text className="text-gray-200 text-s">Expiry Date</Text>
                        <Text className="text-white text-base font-medium">{ExpiryDate}</Text>
                    </View>
                </View>
            </LinearGradient>
        </View>
        // </View>
    );
};

export default CreditCard;
