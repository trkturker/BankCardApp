import { View, Text, Image } from 'react-native';

import { Button } from '@/components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopInfo from '@/components/TopInfo';

export default function Home() {
  return (
    <SafeAreaView className="flex flex-1 bg-white px-6 font-sans">

    <TopInfo />



    </SafeAreaView>
  );
}
