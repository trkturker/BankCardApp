import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const QuickActions = () => {

    const data = [
        {
            id: '1',
           icon: '💰',
            text: 'Send\nFunds',
            bgColor: '#E3F2FD',
            iconColor: '#2196F3'
        },
        {
            id: '2',
            icon: '👥',
            text: 'Browse\nPeople',
            bgColor: '#FFE0B2',
            iconColor: '#FF9800'
        },
        {
            id: '3',
            icon: '📊',
            text: 'Get\nReports',
            bgColor: '#FFF9C4',
            iconColor: '#FBC02D'
        },
        {
            id: '4',
            icon: '💰',
            text: 'Send\nFunds',
            bgColor: '#E3F2FD',
            iconColor: '#2196F3'
        },
        {
            id: '5',
            icon: '👥',
            text: 'Browse\nPeople',
            bgColor: '#FFE0B2',
            iconColor: '#FF9800'
        },
        {
            id: '6',
            icon: '📊',
            text: 'Get\nReports',
            bgColor: '#FFF9C4',
            iconColor: '#FBC02D'
        },
    ]

    return (
        <View className="py-6">
            <Text className="text-2xl text-slate-700 mb-4">Quick Actions</Text>

            <FlatList
                data={data}
                keyExtractor={(icon) => icon.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        className="items-center gap-4 mr-4 shadow-lg"
                        activeOpacity={0.7}
                    >
                        <View className="flex bg-[#f3f7ff] rounded-xl w-32 h-36 py-4 items-center gap-2">

                            <View
                                className="w-16 h-16 rounded-full items-center justify-center mb-2"
                                style={{ backgroundColor: item.bgColor }}
                            >
                                <Text className="text-3xl ">{item.icon}</Text>
                            </View>
                            <Text className="text-sm text-gray-600  font-bold text-center leading-4">
                                {item.text}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
                contentContainerClassName="gap-2 py-4"
                horizontal
            />
        </View>
    )
}

export default QuickActions
